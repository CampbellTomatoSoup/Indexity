import { User } from '../api/user';
import { APIRepository } from '../api/user-repository';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'create-account',
  templateUrl: './app/create-account/create-account.component.html',
  styleUrls: [ './app/create-account/create-account.component.css' ],
  providers: [ APIRepository ]
})

export class CreateAccountComponent {

  errorMessage: null | string = null;
  mode = 'Promise';
  theId: string;
  usr =  new User('','');

  constructor (private userService: APIRepository, private router: Router) {}

  signup (theUser: User) {
    console.log(theUser);
    if (!theUser) { return; }
    this.userService.signup (theUser)
    .then (
      id  => {
        this.theId = id;
        console.log(this.theId);
        //if (this.theId != '-1') { this.router.navigateByUrl('/search'); }
        //else { this.errorMessage = 'error'; }
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
