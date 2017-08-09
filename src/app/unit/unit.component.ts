import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Unit, Ressource } from '../data.service';


@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  @Input()dataUnit:Unit;
  @Input()dataRessource:Ressource;
  @Output()buyUnit = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  buy(n:number){
    //console.log("jemet");
    this.buyUnit.emit({n:n, rank:this.dataUnit.rank});
  }

  canBuy(n:number):boolean{
    //console.log(this.dataRessource.amount);
    return this.dataRessource.amount>=this.dataUnit.costNBuy(n);
  }

  
}
