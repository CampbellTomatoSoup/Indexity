//import { APIRepository } from '../api/user-repository.service';
import { User } from '../api/user';
import { APIRepository } from '../api/user-repository';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Location }               from '@angular/common';

@Component({
  //moduleId: module.id,
  selector: 'landing',
  templateUrl: './app/landing/landing.component.html',
  styleUrls: [ './app/landing/landing.component.css' ]
})

export class LandingComponent { 
  usr =  new User('','');
  userService: APIRepository;
  location: Location;

  /*constructor(
    private userService: APIRepository,
    private route: ActivatedRoute,
    private location: Location
  ) {}*/

  verify(usr: string, pswd: string) : void {
    this.usr.userName = usr;
    this.usr.password = pswd;
    console.log(this.usr);

    //this.userService.login(this.usr)
    //.then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  //constructor (private router: Router, private route: ActivatedRoute, private movieRepository: UserRepository) { }

  /*ngOnInit() {
		this.route.params.subscribe (x => {
			this.loadUser(+x['id']);
		});
	}*/

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  
  
  
  //constructor (private router: Router, private route: ActivatedRoute, private userRepository: UserRepository) { }

  /*ngOnInit() {
		this.route.params.subscribe (x => {
			this.loadUser(+x['id']);
		});
	}

  loadUser (id: number) {
		if (id) {
			this.user = this.userRepository.get(id);
		}
	}

	go(path : string) {
        //this.router.navigate([path]);
  }*/
}