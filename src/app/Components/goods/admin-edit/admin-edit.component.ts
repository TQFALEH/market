import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css'],
})
export class AdminEditComponent implements OnInit {
  constructor(private mS: MarketService, private route: Router) {}
  product = ([] = []);
  brands = [
    {
      name: 'sony',
      img: 'bi bi-playstation',
    },
    {
      name: 'xbox',
      img: 'bi bi-xbox',
    },
    {
      name: 'nintendo',
      img: 'bi bi-nintendo-switch',
    },
  ];
  ngOnInit(): void {
    this.mS.getAllCars().subscribe((res: any) => {
      console.log(res);
      this.product = res;
    });
  }
  onSave(newCar: NgForm) {
    this.mS.addCar(newCar.value);
    newCar.reset();
    this.route.navigate(['']);
    console.log(newCar.value);
  }
}
