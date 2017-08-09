import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { DataService, GameData, Ressource, Unit  } from '../data.service';

@Component({
  selector: 'app-units-home',
  templateUrl: './units-home.component.html',
  styleUrls: ['./units-home.component.scss']
})
export class UnitsHomeComponent implements OnInit {
  show:string = "";
  data:GameData;
  dataSubscription:Subscription;
  dataUnit:Unit[];

  constructor(private service:DataService) {

  }

  ngOnInit() {
    this.data = this.service.getData();
    this.dataUnit = this.data.units;

    this.dataSubscription = this.service.data$.subscribe((v:GameData) => {
      this.data = v;
      this.dataUnit = v.units;
      //
      // console.log("je suis dans unit-home, subscribe sur les changements de ressources");
      // console.log(v);
      // console.log(this.data);
    })
  }

  ngOnDestroy(){
    this.dataSubscription.unsubscribe();
  }

  buyUnit(e:any):void{
    // console.log(e);
    if(this.data.ressource.spend(this.data.units[e.rank].costNBuy(e.n)))
    {
      this.data.units[e.rank].amount += e.n;
      this.service.setData(this.data);
    }else{
      console.log("ERROR BUY")
    }
  }

  showTab(s:string):void{
    // console.log(s);
    // console.log(typeof s);
    this.show=s;
  }

  //pow
  pow(n, power):number{
    return Math.pow(n,power);
  }
}
