import { ResourcesComponent } from './resources/resources.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes }   from '@angular/router';
import { MockApiService } from './mock-api.service';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { InMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { LandingComponent }   from './landing/landing.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { APIRepository } from './api/user-repository';
import { SearchComponent } from './search/search.component';

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
];

@NgModule ({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpModule,
        JsonpModule
        //InMemoryWebApiModule.forRoot(MockApiService)
    ],
    declarations: [
        AppComponent,
        LandingComponent,
        CreateAccountComponent,
        EditAccountComponent,
        ResourcesComponent,
        SearchComponent
    ],
    providers: [
        APIRepository
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
