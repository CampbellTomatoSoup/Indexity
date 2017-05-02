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

  constructor (private userService: APIRepository, private router: Router) {
				var currentUser = JSON.parse (this.myStorage['userId']);
				console.log(currentUser);
        //this.token = currentUser && currentUser.token;
	}

	changePassword (theUser: User) {
		var data = this.myStorage['userId'];
		if (!theUser) { return; }
    this.userService.changePassword (data, theUser)
    .then (
      id  => {
        this.theId = id._body;
				console.log("RESPONSE: " + this.theId);
				if (this.theId != '-1') {
					// if old password matches old pass
					this.pwMessage = 'awesome pw';
					console.log("yessssssssss");
				} else {
					console.log("NOOOOOOOOOOOOOOOOO");
				}
				for (var key in this.myStorage) {
		  		//console.log("STORAGE: " + key + ':' + this.myStorage[key]);
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
