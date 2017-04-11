import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes }   from '@angular/router';

import { LandingComponent }   from './landing/landing.component';
import { CreateAccountComponent } from './create-account/create-account.component';

var routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'create-account',
    component: CreateAccountComponent
  }
];

@NgModule ({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ], 
    declarations: [
        AppComponent,
        LandingComponent,
        CreateAccountComponent
    ], 
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}