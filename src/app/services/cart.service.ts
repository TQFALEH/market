import { Injectable } from '@angular/core';
import { Cars } from '../Models/cars.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  userUid: any;
  item: any;
  constructor(private fs: AngularFirestore, public afAuth: AuthService) {}

  addTocart(data: { name: string; amount: number; price: number }) {
    this.userUid = this.afAuth.auth.currentUser?.uid;
    this.userUid.toString();
    console.log(data);

    this.fs
      .collection(`users/${this.afAuth.auth.currentUser?.uid}/usersCars`)
      .add({
        name: data.name,
        amount: data.amount,
        price: data.price,
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((err) => {
        console.error('Error writing document: ', err);
      });
  }

  getCart() {
    return this.fs
      .collection(`users/${this.afAuth.auth.currentUser?.uid}/usersCars`)
      .snapshotChanges();
  }

  updataAmount(id: string, amount: number) {
    return this.fs
      .collection(`users/${this.afAuth.auth.currentUser?.uid}/usersCars`)
      .doc(id)
      .update({ amount: amount })
      .then(() => {
        console.log('thie new amount updated is  ' + amount);
      });
  }

  getLength() {
    return this.fs
      .collection(`users/${this.afAuth.auth.currentUser?.uid}/usersCars`)
      .valueChanges();
  }

  removeItem(id: any) {
    this.fs
      .collection(`users/${this.afAuth.auth.currentUser?.uid}/usersCars`)
      .doc(id)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  }
}
