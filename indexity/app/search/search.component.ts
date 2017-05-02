import { Component, OnInit } from '@angular/core';
import { User } from '../api/user.interface';
import { Theme } from '../api/theme.interface';
import { Router } from '@angular/router';
import { SearchRepository } from '../api/search-repository';

@Component({
  selector: 'search',
  templateUrl: './app/search/search.component.html',
  styleUrls: ['./app/search/search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private userService: SearchRepository, private router: Router) { }

  public user: User;

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

  ngOnInit(){
    this.user = {
    city1: null,
    city2: null
  }
}/*
errorMessage: null | string = null;
mode = 'Promise';
theId: string;
usr =  new User('','');
location: Location;

login(theUser: User) {
  console.log(theUser);
  if (!theUser) { return; }
  this.userService.login(theUser)
  .then (
    id  => {
      this.theId = id;
      if (this.theId != '-1') { this.router.navigateByUrl('/compare'); }
      else { this.errorMessage = 'error'; }
    })
  .catch(
    err => {
      this.errorMessage = err;
    }
  );
}

goBack(): void {
  this.location.back();
}

submitted = false;
onSubmit() {
  this.submitted = true;
}
*/
public save(isValid: boolean, f: User) {
        console.log(f);
    }
  }
