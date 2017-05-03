import { Component, OnInit } from '@angular/core';
//import { User } from '../api/user.interface';
//import { Theme } from '../api/theme.interface';

import { User } from '../api/user';
import { APIRepository } from '../api/user-repository';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './app/search/search.component.html',
  styleUrls: ['./app/search/search.component.css'],
  providers: [ APIRepository ]
})
export class SearchComponent implements OnInit {
  constructor(private userService: APIRepository, private router: Router) { }

  public user: User;
  errorMessage: null | string = null;
  theId: string;
  usr =  new User('','','','','','','','','');
  myStorage = localStorage;

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

//selected costs
  publicTrans: false;
  housing: false;
  utilities: false;
  groceries: false;
  healthcare: false;
  incomeTax: false;
  salesTax: false;

//a list of the cities
  public cities = [
    { value: 'austin', display: 'Austin' },
    { value: 'baltimore', display: 'Baltimore' },
    { value: 'boston', display: 'Boston' },
    { value: 'columbus', display: 'Columbus' },
    { value: 'dallas', display: 'Dallas' },
    { value: 'denver', display: 'Denver' },
    { value: 'detroit', display: 'Detroit' },
    { value: 'honolulu', display: 'Honolulu' },
    { value: 'houston', display: 'Houston' },
    { value: 'lasvegas', display: 'Las Vegas' },
    { value: 'losangeles', display: 'Los Angeles' },
    { value: 'memphis', display: 'Memphis' },
    { value: 'newyork', display: 'New York' },
    { value: 'orlando', display: 'Orlando' },
    { value: 'philidelphia', display: 'Philidelphia' },
    { value: 'pittsburgh', display: 'Pittsburgh' },
    { value: 'sanantonio', display: 'San Antonio' },
    { value: 'sandiego', display: 'San Diego' },
    { value: 'sanfransisco', display: 'San Fransisco' },
    { value: 'seattle', display: 'Seattle' },
    { value: 'stlouis', display: 'St. Louis' },
    { value: 'dc', display: 'D.C.' },
];

/*login(theUser: User) {
  if (!theUser) { return; }
  this.userService.login(theUser)
  .then (
    id  => {
      this.theId = id._body;
      console.log("RESPONSE: " + this.theId);
      this.usr.userId = this.theId;
      this.myStorage.setItem('userId', this.theId);
      console.log("STORAGE: " + this.myStorage['userId']);
      this.myStorage.setItem('user', this.usr);
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
}*/



  ngOnInit(){
    this.user = {
    city1: null,
    city2: null
  }
}

public save(isValid: boolean, f: User) {
        console.log(f);
    }

}
