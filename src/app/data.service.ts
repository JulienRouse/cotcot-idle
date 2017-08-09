import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class Ressource {
  name:string;
  amount:number;
  amountTotal:number;
  amountEachTick:number;

  constructor(obj){
      this.name=obj.name;
      this.amount=obj.amount;
      this.amountTotal=obj.amountTotal;
      this.amountEachTick=obj.amountEachTick;
    }

  //
  produce():number{
    return this.amountEachTick;
  }
  //TODO:change name, this produce ressource updating amount and amountTotal
  //    with the value of amountEachTick
  produceN(n:number):void{
    //let n = this.amountEachTick;
    this.amount += n;
    this.amountTotal += n;
  }

  spend(n){
    if(n<=this.amount){
      this.amount -= n;
      return true;
    }
    return false;
  }
}

export class Unit {
  rank:number;
  name:string;
  amount:number;
  amountBought:number;
  amountEachTick:number;
  amountTotal:number;
  baseCost:number;
  costMultiplier:number;
  productionBase:number;
  productionMultiplier:number;

  constructor(obj){
    this.rank = obj.rank;
    this.name = obj.name;
    this.amount = obj.amount;
    this.amountBought = obj.amountBought;
    this.amountEachTick = obj.amountEachTick;
    this.amountTotal = obj.amountTotal;
    this.baseCost = obj.baseCost;
    this.costMultiplier = obj.costMultiplier;
    this.productionBase = obj.productionBase;
    this.productionMultiplier = obj.productionMultiplier
  }

  produce():number{
    return this.amount * this.productionBase * this.productionMultiplier;
  }

  produceN(n:number):void{
    //let n  = this.amount * this.productionBase * this.productionMultiplier;
    this.amount += n;
    this.amountTotal += n;
  }

  buy(n:number):void{
    this.amount += n;
    this.amountBought += n;
    this.amountTotal += n;
  }

  cost1Buy(cost, multiplier, amount):number{
    return Math.ceil(cost * Math.pow(multiplier, amount))
  }

  costNBuy(n:number){
    if(n<0){
      throw new Error("not a valid number");
    }
    let res:number=0;
    for(let i:number=0;i<n;i++){
      res += this.cost1Buy(this.baseCost, this.costMultiplier, this.amount+i);
    }
    return res;
  }
}

export class GameData {
  ressource:Ressource;
  units:Unit[];

  constructor(res:Ressource, units:Unit[]){
    this.ressource = res;
    this.units = units;
  }
}

let data:GameData = new GameData(
  new Ressource({
    name: "Oeufs en chocolat",
    amountTotal: 0,
    amount: 10,
    amountEachTick: 0,
  }),
   [
    new Unit({
      rank: 0,
      name: "Poules en chocolat",
      productionBase: 1,
      productionMultiplier: 1,
      amount: 0,
      amountBought: 0,
      amountEachTick: 0,
      amountTotal: 0,
      baseCost: 10,
      costMultiplier: 1.2,
    }),
    new Unit({
      rank: 1,
      name: "Oeufs Doré",
      productionBase: 1,
      productionMultiplier: 1,
      amount: 0,
      amountBought: 0,
      amountEachTick: 0,
      amountTotal: 0,
      baseCost: 1000,
      costMultiplier: 1.2,
    }),
    new Unit({
      rank: 2,
      name: "Poules Doré",
      productionBase: 1,
      productionMultiplier: 1,
      amount: 0,
      amountBought: 0,
      amountEachTick: 0,
      amountTotal: 0,
      baseCost: 100000,
      costMultiplier: 1.3,
    }),
    new Unit({
      rank: 3,
      name: "Oeufs Arc-En-Ciel",
      productionBase: 2,
      productionMultiplier: 1,
      amount: 0,
      amountBought: 0,
      amountEachTick: 0,
      amountTotal: 0,
      baseCost: 100000000,
      costMultiplier: 1.4,
    }),
  ]
);

@Injectable()
export class DataService {

  //observable string source
  //https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
  private dataSubject = new Subject<Object>()

  //observable string streams
  data$ = this.dataSubject.asObservable();

  constructor() {
    console.log(data);
  }

  setData(gameData:GameData):void{
    data = gameData;
    this.dataSubject.next(data);
  }

  getData():GameData{
    return data;
  }

  getRessource():Ressource{
    return this.getData().ressource;
  }

  getUnits():Unit[]{
    return this.getData().units;
  }

  getUnitN(n:number):Unit{
    return this.getData().units[n]; //TODO check length? && error handling
  }

  //calculations/game
  gameStart(){
    this.gameInit();
    this.gameClock();
  }

  gameInit(){
  }

  gameClock(interval:number=1000){
    setInterval(()=>{
      //generateRessource
      let gameData;
      let newRessource = this.generateRessource();
      let newUnit = this.generateUnit();
      //updateAmount

      //propagate change
      gameData = new GameData(newRessource, newUnit)
      this.setData(gameData);

    }, interval)
  }

  generateRessource():Ressource{
    let newRessource = this.getRessource();
    newRessource.produceN(this.getUnitN(0).produce());
    newRessource.amountEachTick = this.getUnitN(0).produce();
    return newRessource;
    }

  generateUnit():Unit[]{
    //console.log("generate units")
    let newUnit:Unit[] = this.getUnits();
    newUnit.map((item,i,tab) => {
      if(i<tab.length-1){
        item.amountEachTick = newUnit[item.rank+1].produce();
        item.produceN(newUnit[i+1].produce());
      }
    });
    return newUnit;
  }

}
