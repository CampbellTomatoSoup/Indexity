import { User } from '../api/user';
import { APIRepository } from '../api/user-repository';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'edit-account',
	templateUrl: './app/edit-account/edit-account.component.html',
	styleUrls: [ './app/edit-account/edit-account.component.css' ],
	providers: [ APIRepository ]
})

export class EditAccountComponent {

	pwMessage: null | string = null;
  mode = 'Promise';
  theId: string;
  usr =  new User('','','','','','');
	myStorage = localStorage;
	oldPass: string;
	currentUser: string;

  constructor (private userService: APIRepository, private router: Router) {
        //this.token = currentUser && currentUser.token;
	}

	changePassword (theUser: User) {
		// currentUser is what's in localStorage
		this.currentUser = JSON.parse (this.myStorage['userId']);
		//console.log("STORAGEID: " + this.currentUser);
		var data = this.myStorage['userId'];
		console.log("STORAGEID: " + this.currentUser + "\tIDTOSEND: " + data + "\tOLDPASS: " + this.oldPass "\tUSERPASS: " + this.usr.password);
		if (!theUser) { return; }
    this.userService.changePassword (data, this.oldPass, theUser)
    .then (
      id  => {
        this.theId = JSON.parse(id._body);
				console.log("RESPONSEID: " + this.theId);
				console.log("STORAGEID: " + this.currentUser);
				console.log("JSONPARSE: " + JSON.parse(this.theId));

				if (JSON.parse(this.theId) == this.currentUser) {
					// if old password matches old pass
					this.pwMessage = 'awesome pw';
					//console.log("password success! (MAYBE)");
				} else {
					console.log("password fail...");
				}
        //if (this.theId != '-1') { this.router.navigateByUrl('/search'); }
        //else { this.errorMessage = 'error'; }
      })
    .catch(
      err => {
				console.log(err);
        this.errorMessage = err;
      }
    );
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
