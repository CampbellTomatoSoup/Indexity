import { Component } from '@angular/core';
import { APIRepository } from '../api.service';
import { User } from '../api/user';

@Component({
  selector: 'landing',
  templateUrl: './app/landing/landing.component.html',
  styleUrls: [ './app/landing/landing.component.css' ],
})

export class LandingComponent {

  constructor(repo: APIRepository){

  }

  model = new User('username', 'password', 0, 'email');
  submitted = false;

  onSubmit() { this.submitted = true; }




  //formController($scope, $http){

  }
//  verify(){

//  }
