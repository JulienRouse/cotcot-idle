import { Component, OnInit} from '@angular/core';

import { DataService, Unit, Ressource, GameData } from './data.service'
import { AuthService } from './auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CotCot Idle';
  data:GameData;

  constructor(private service:DataService, private auth:AuthService){

  }

  ngOnInit(){

    //get data from service
    this.data = this.service.getData();
    // console.log("init app");
    // console.log(this.data);
    this.auth.handleAuthentication();


    this.service.data$.subscribe((v:GameData) =>{
      // console.log("app home");
      // console.log(v);
      //this.data = v;
    })
    //launch clock
    console.log("Start the game clock")
    let token:any = this.auth.isAuthenticated() ? this.auth.getIdToken() : false;
    this.auth.getProfile((err, profile)=>{
      token = profile;
      console.log(token.sub);
      this.service.gameStart(token)
    });
    console.log(token)
    //this.service.gameStart(token);
  }

}
