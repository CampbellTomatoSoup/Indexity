import { Component, OnInit } from '@angular/core';
import { APIRepository } from '../api/user-repository';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { User } from '../api/user';

@Component({
	selector: 'resources',
	templateUrl: './app/resources/resources.component.html',
  	styleUrls: [ './app/resources/resources.component.css' ],
		providers: [ APIRepository ]
})

export class ResourcesComponent implements OnInit {
errorMessage: null | string = null;
 theId: string;
 usr =  new User('','','','','','','','', 0);
 myStorage = localStorage;

 constructor (private userService: APIRepository, private router: Router) {}
 ngOnInit() {
getResources() {
			this.userService.getResources()
				.then((result) => {
			this.result = result.artists.items;
			this.result =
			this.result =
			this.result =
			this.result =
			this.result =
			this.result =
		})
		.catch((error) => console.error(error));
	}
}

	 private handleError(error: any): Promise<any> {
	     console.error('An error occurred', error);
	     return Promise.reject(error.message || error);
	   }

submitted = false;
onSubmit() {
	this.submitted = true;
	}
 }
