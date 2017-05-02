import { ResourcesComponent } from './resources/resources.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes }   from '@angular/router';
import { MockApiService } from './mock-api.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { LandingComponent }   from './landing/landing.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { APIRepository } from './api/user-repository';
import { SearchComponent } from './search/search.component';
import { CompareComponent } from './compare/compare.component';
import { Component, OnInit } from '@angular/core';
import { SearchRepository } from './api/search-repository';
import { User } from './api/user.interface';
import { Theme } from './api/theme.interface';


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
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'compare',
    component: CompareComponent
  }
];

@NgModule ({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpModule,
        //InMemoryWebApiModule.forRoot(MockApiService)
    ],
    declarations: [
        AppComponent,
        LandingComponent,
        CreateAccountComponent,
        EditAccountComponent,
        ResourcesComponent,
        SearchComponent,
        CompareComponent
    ],
    providers: [
        APIRepository,
        SearchRepository
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

  }
