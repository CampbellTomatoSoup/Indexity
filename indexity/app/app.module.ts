import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes }   from '@angular/router';

import { LandingComponent }   from './landing/landing.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';

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
    path: 'edit-account',
    component: EditAccountComponent
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
        CreateAccountComponent,
        EditAccountComponent
    ], 
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}