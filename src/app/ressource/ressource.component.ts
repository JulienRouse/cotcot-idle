import { Component, OnInit, Input} from '@angular/core';

import { Ressource } from '../data.service'


@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.scss']
})
export class RessourceComponent implements OnInit {
  @Input()dataRessource:Ressource;
  constructor() {

   }

  ngOnInit() {
  }

}
