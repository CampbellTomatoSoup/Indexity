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

// for logout --> each page must check if there is a userid in localStorage
// else show a message that you must be logged in or give them option to sign up

export class EditAccountComponent implements OnInit{
	acctMessage: null | string = null;
	pwMessage: null | string = null;
	failpwMessage: null | string = null;
	errorMessage: null | string = null;
  mode = 'Promise';
  theId: string;
  usr =  new User('','','','','','','','',0);
	myStorage = localStorage;
	oldPass: string;
	currentUser: string;

  constructor (private userService: APIRepository, private router: Router) {
        //this.token = currentUser && currentUser.token;
	}

	ngOnInit() {
		if (this.myStorage.getItem("userId") === null) { // ===
      //console.log("there's a userid" + this.myStorage.getItem("userId"));
			// navigate back to login and clear local storage
			this.router.navigateByUrl("");
			this.myStorage.removeItem("userId");
    }
	}
//
	changePassword (theUser: User) {
		// currentUser is what's in localStorage
		this.currentUser = JSON.parse (this.myStorage['userId']);
		var data = this.myStorage['userId'];
		//console.log("STORAGEID: " + this.currentUser + "\tIDTOSEND: " + data + "\tOLDPASS: " + this.oldPass "\tUSERPASS: " + this.usr.password);
		if (!theUser) { return; }
    this.userService.changePassword (data, this.oldPass, theUser)
    .then (
      id  => {
        this.theId = JSON.parse(id._body);
				if (JSON.parse(this.theId) == this.currentUser) {
					this.pwMessage = 'awesome pw';
				} else {
					this.failpwMessage = 'not so awesome pw';
				}
      })
    .catch( err => { this.errorMessage = err; } );
  }

	editAccount(theUser: User) {
		this.currentUser = JSON.parse (this.myStorage['userId']);
		var data = this.myStorage['userId'];

		if (!theUser) { return; }
		this.userService.editAccount(data, theUser)
		.then (
			id  => {
				this.theId = JSON.parse(id._body);
				if (JSON.parse(this.theId) == this.currentUser) {
					this.acctMessage = 'this is a good account';
				}
			})
		.catch( err => { this.errorMessage = err; } );
	}

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
