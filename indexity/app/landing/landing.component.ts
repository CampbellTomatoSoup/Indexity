//import { APIRepository } from '../api/user-repository.service';
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
  mode = 'Promise';
  theId: string;
  usr =  new User('','');
  location: Location;

  constructor (private userService: APIRepository, private router: Router) {}

  login(theUser: User) {
    console.log(theUser);
    if (!theUser) { return; }
    this.userService.login(theUser)
    .then (
      id  => {
        this.theId = id._body;
        if (this.theId != '-1') { this.router.navigateByUrl('/search'); }
        else { this.errorMessage = 'error'; }
      })
    .catch(
      err => {
        this.errorMessage = err;
      }
    );
  }

  /*
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  */

  /*
  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }
  */

  goBack(): void {
    this.location.back();
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
