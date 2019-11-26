import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { PersonalTrust } from '../models/personal-trust';
import { BrandTrust } from '../models/brand-trust';
import { InnovationTrust } from '../models/innovation-trust';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

@Injectable({
    providedIn: 'root'
})
export class CsvDownloaderService {

    constructor() { }

    exportAsExcelFile(brandTrust: BrandTrust, innovationTrust: InnovationTrust, personalTrust: Array<PersonalTrust>, excelFileName: string): void {
        // creating the worksheets
        const brandWorksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([brandTrust]);
        const innovationWorksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([innovationTrust]);
        const personalWorksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(personalTrust);

        // changing header names for Brand worksheet
        brandWorksheet.A1.v = "Group ID";
        brandWorksheet.B1.v = 'Associations';
        brandWorksheet.C1.v = 'Inciting Incidents';
        brandWorksheet.D1.v = 'Conflict';
        brandWorksheet.E1.v = 'Call to Action';
        brandWorksheet.F1.v = 'Vision';

        // changing header names for Personal worksheet
        innovationWorksheet.A1.v = "Group ID";
        innovationWorksheet.B1.v = 'Relative Trust';
        innovationWorksheet.C1.v = 'User Experience';
        innovationWorksheet.D1.v = 'The Promise';
        innovationWorksheet.E1.v = 'Social Proof';

        // changing header names for Personal worksheet
        personalWorksheet.A1.v = "Group ID";
        personalWorksheet.B1.v = 'Email';
        personalWorksheet.C1.v = 'Connection';
        personalWorksheet.D1.v = 'Control';
        personalWorksheet.E1.v = 'Consistency';
        personalWorksheet.F1.v = 'Commitment';
        personalWorksheet.G1.v = 'Co-Creation';

        // creating the workbook and attaching the worksheet
        const workbook: XLSX.WorkBook = { 
            Sheets: { 
                'Brand': brandWorksheet, 
                'Innovation': innovationWorksheet, 
                'Personal': personalWorksheet 
            }, 
            SheetNames: [
                'Brand', 
                'Innovation', 
                'Personal'
            ] 
        };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

        // saving to an Excel file
        const data: Blob = new Blob([excelBuffer], { type: EXCEL_TYPE });
        FileSaver.saveAs(data, excelFileName + '.xlsx');
    }
}
