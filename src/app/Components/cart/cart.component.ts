import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/Models/cars.interface';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cs: CartService) {}

  showEdit = false;
  isUpdate = false;
  localCart: Cars[] = [];

  ngOnInit(): void {
    this.cs.getCart().subscribe((res: any[]) => {
      this.localCart = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        };
      });
    });
    console.log(this.localCart);
  }

  deleteItemFromCart(id: string) {
    this.cs.removeItem(id);
  }

  updateAmount(id: string, amount: number) {
    this.cs.updataAmount(id, amount);
  }
}
