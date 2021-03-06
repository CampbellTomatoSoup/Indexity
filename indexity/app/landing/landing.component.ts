import { User } from '../api/user';
import { APIRepository } from '../api/user-repository';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  //moduleId: module.id,
  selector: 'landing',
  templateUrl: './app/landing/landing.component.html',
  styleUrls: [ './app/landing/landing.component.css' ],
  providers: [ APIRepository ]
})

export class LandingComponent {
  errorMessage: null | string = null;
  theId: string;
  usr =  new User('','','','','','','','',0);
  myStorage = localStorage;

  constructor (private userService: APIRepository, private router: Router) {}

  login(theUser: User) {
    if (!theUser) { return; }
    this.userService.login(theUser)
    .then (
      id  => {
        this.theId = id._body;
        this.usr.userId = this.theId;
        this.myStorage.setItem('userId', this.theId);
        //this.myStorage.setItem('user', this.usr);
        //this.myStorage.setItem('currentUser', JSON.stringify (this.usr));
        if (this.theId != '-1') {
          this.router.navigateByUrl('/search');
        }
        else { this.errorMessage = 'error'; }
      })
    .catch(
      err => {
        this.errorMessage = err;
      }
    );
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
