import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';

// from angularfirebase.com tutorial
@Injectable()
export class LoginService {

  authState: any = null;
  groupId: any = null;
  associateEmail: any = null;

  constructor(private afAuth: AngularFireAuth,
              private router:Router,
              private db: AngularFirestore) {

            this.afAuth.authState.subscribe((auth) => {
              this.authState = auth
            });
          }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  getGroupId(){
    return this.groupId;
  }

  setGroupId(uid){
    this.db.collection("group", ref => ref.where("managerId", "==", uid)).get().subscribe(data => {
      this.groupId = data.docs[0].data().id;
    });
  }

  addGroup(group){
    this.db.collection('group').add({...group});
  }

  setAssociateGroupId(groupId){
    this.groupId = groupId;
  }

  setAssociateEmail(email){
    this.associateEmail = email;
  }

  getAssociateEmail(){
    return this.associateEmail;
  }

  getGroupObject(groupid){
    return this.db.collection("group", ref => ref.where("id", "==", groupid));
  }

  get currentUserEmail(): any {
    return this.afAuth.auth.currentUser.email;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  emailLogin(email:string, password:string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        this.setGroupId(user.user.uid);
        this.router.navigate(['/landing']);
      })
      .catch(error => {
        alert(error.message);
      });
 }

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login'])
  }
}