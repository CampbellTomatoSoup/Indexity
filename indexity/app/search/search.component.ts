import { Component, OnInit } from '@angular/core';
//import { User } from '../api/user.interface';
//import { Theme } from '../api/theme.interface';

import { User } from '../api/user';
import { Selection } from '../api/selection';
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
  origin: string;
  dest: string;
  usr =  new User('','','','','','','','',0);
  selec = new Selection(false, false, false, false, false, false, false);
  myStorage = localStorage;

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

//selected costs
/*
  publicTrans: boolean = false;
  housing: boolean = false;
  utilities: boolean = false;
  groceries: boolean = false;
  healthcare: boolean = false;
  incomeTax: boolean = false;
  salesTax: boolean = false;*/

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

saveSelections(id: string, theOrigin: string, theDest: string) {
  this.userService.saveSelections(id, theOrigin, theDest)
  .then (
    id => {
      this.theId = id._body;
      console.log("ID_FROM_RESPONSE" + this.theId);
      /*if () {
        this.router.navigateByUrl('/resources');
      } else {
        this.errorMessage = 'error';
      }*/
    }
  )
  .catch ( err => { this.errorMessage = err; } );
}

  ngOnInit(){
    this.user = {
    city1: null,
    city2: null
  }
}

public save() {
  console.log("ORIGIN: " + this.origin);
  console.log("DEST: " + this.dest);
  console.log("PUBTRANS: " + this.selec.publicTrans);
  console.log("HOUSING: " + this.selec.housing);
  console.log("UTILS: " + this.selec.utilities);
  console.log("GROCERIES: " + this.selec.groceries);
  console.log("HEALTH: " + this.selec.healthcare);
  console.log("INCOME: " + this.selec.incomeTax);
  console.log("SALES: " + this.selec.salesTax);
}

}
