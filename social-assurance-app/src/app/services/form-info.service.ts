import { Injectable } from '@angular/core';
import { BrandTrust } from '../models/brand-trust';
import { InnovationTrust } from '../models/innovation-trust';
import { PersonalTrust } from '../models/personal-trust';

@Injectable({
  providedIn: 'root'
})
export class FormInfoService {

  constructor() { }

  brandTrust: BrandTrust;
  innovationTrust: InnovationTrust;
  personalTrust: PersonalTrust;
}
