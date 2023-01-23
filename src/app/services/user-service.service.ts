import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private auth:Auth ) { }


  registerUser({email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }


}
