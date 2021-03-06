import { Component, OnInit} from '@angular/core';

import { DataService, Unit, Ressource, GameData } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CotCot Idle';
  data:GameData;

  constructor(private service:DataService){
    //get data from service
    this.data = service.getData();
    // console.log("init app");
    // console.log(this.data);
  }

  ngOnInit(){
    this.service.data$.subscribe((v:GameData) =>{
      // console.log("app home");
      // console.log(v);
      //this.data = v;
    })

    //launch clock
    console.log("Start the game clock")
    this.service.gameStart();

  }
}
