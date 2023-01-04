import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cars } from 'src/app/Models/cars.interface';
import { CartService } from 'src/app/services/cart.service';
import { MarketService } from 'src/app/services/market.service';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  [x: string]: any;

  model = '';
  brand = '';
  cars =''
  add = -1;
  goods: Cars[] = [];
  constructor(
    private mS: MarketService,
    private route: Router,
    private cs: CartService,
    private auth :AuthService
  ) {}
  ngOnDestroy(): void {
    this.mS.getAllCars().subscribe().unsubscribe();
  }

  isUser  =false;
  display = false;
  ngOnInit(): void {
    this.mS.getAllCars().subscribe((res: any[]) => {
      this.goods = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        };
      });
    });
    this.auth.afAuth.user.subscribe(res=>{
      if(res){
        this.isUser = true
        console.log(res.providerData);
      }else{
        this.isUser = false

        console.log('no use rname ');
      }
    })
  }
  // onAdd() {
  // this.route.navigate(['login'])
  // }
  addToCart(index: any) {
    console.log('Added ' + index);
    this.add = index;
    console.log(this.goods);
  }

  buy(amounat: string) {
    let selectedData = this.goods[this.add];
    let data = {
      name: selectedData.name,
      amount: +amounat,
      price: selectedData.price,
    };
    this.cs.addTocart(data);
    this.add = -1;
  }
  remove(id: any) {
    console.log(id);
    this.mS.removeItem(id);
  }
}
