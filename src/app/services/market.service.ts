import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ColorsService } from './colors.service';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  constructor(private fs: AngularFirestore ,private colors:ColorsService) {}
  getAllCars() {
    return this.fs.collection('Cars').snapshotChanges();
  }
  addCar(newCar: { name: string,brand: string, img: string, price: number }) {
    this.fs
      .collection('Cars')
      .add({
        name: newCar.name,
        img: newCar.img,
        price: newCar.price,
        brand: newCar.brand,
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  }

  removeItem(id: any) {

    this.fs
      .collection('Cars')
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
