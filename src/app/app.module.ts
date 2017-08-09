import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UnitsHomeComponent } from './units-home/units-home.component';
import { UnitComponent } from './unit/unit.component';
import { RessourceComponent } from './ressource/ressource.component';

import { DataService } from './data.service'

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
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
