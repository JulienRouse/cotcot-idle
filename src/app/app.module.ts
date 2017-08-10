import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { ApolloClient } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import { UnitsHomeComponent } from './units-home/units-home.component';
import { UnitComponent } from './unit/unit.component';
import { RessourceComponent } from './ressource/ressource.component';
//data
import { DataService } from './data.service'
//client for apollo
import { provideClient } from './client'


const appRoutes: Routes = [
  {path: 'units-home', component: UnitsHomeComponent},
  {path: 'ressource', component: RessourceComponent},
  { path: '',
    redirectTo: '/units-home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/units-home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UnitsHomeComponent,
    UnitComponent,
    RessourceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ApolloModule.forRoot(provideClient),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
