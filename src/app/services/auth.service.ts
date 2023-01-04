import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auth } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = getAuth();
  constructor(
    private afS: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {}

  //regester new account
  async signup(email: string, password: string, displayName: string) {
    const res = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    res.user?.updateProfile({ displayName });
  }

  // sign in
  signin(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  // logOut
  signout() {
    return this.afAuth.signOut();
  }
}
