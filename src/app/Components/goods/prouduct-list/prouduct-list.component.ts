import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-prouduct-list',
  templateUrl: './prouduct-list.component.html',
  styleUrls: ['./prouduct-list.component.css']
})
export class ProuductListComponent implements OnInit {
  showEdit = false;

  product :any
  constructor(private mS: MarketService) {}
    ngOnInit(): void {

      this.mS.getAllCars().subscribe((res: any[]) => {
        this.product = res.map((e) => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data(),
          };
        });
      });

    }


  deleteItemFromCart(id: string) {
    this.mS.removeItem(id);
  }

  updateAmount(id: string, amount: number) {
    // this.mS.updataAmount(id, amount);
  }

}
