import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes }   from '@angular/router';
import { SearchComponent } from './search/search.component';
import { LandingComponent }   from './landing/landing.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PiechartComponent } from './piechart/piechart.component';
import { APIRepository } from './api.service';
import { FormsModule } from '@angular/forms';

var routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'create-account',
    component: CreateAccountComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'piechart',
    component: PiechartComponent
  }
];

@NgModule ({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
    exports: [
      LandingComponent,
      CreateAccountComponent,
      SearchComponent,
      PiechartComponent
    ],
    declarations: [
        AppComponent,
        LandingComponent,
        CreateAccountComponent,
        SearchComponent,
        PiechartComponent
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
