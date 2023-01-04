import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css'],
})
export class GoodsComponent implements OnInit {
  isClick = false ;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(public router :Router){



  }


}
