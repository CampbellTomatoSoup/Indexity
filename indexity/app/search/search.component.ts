import { Component, OnInit } from '@angular/core';
//import { User } from '../api/user.interface';
//import { Theme } from '../api/theme.interface';

import { User } from '../api/user';
import { Selection } from '../api/selection';
import { APIRepository } from '../api/user-repository';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

export class Stuff {
  public city1: string;
  public city2: string;
}

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
  origin: string = null;
  dest: string = null;
  usr =  new User('','','','','','','','',0);
  selec = new Selection(false, false, false, false, false, false, false);
  myStorage = localStorage;
  stuffs: Stuff;
  currentUser: string;

  ngOnInit() {
    // if no userid in localstorage, then redirect to login
    //for (let key in this.myStorage) {
      //console.log("KEY: " + this.myStorage[key]);
    if (this.myStorage.getItem("userId") != null) { // ===
      console.log("there's a userid" + this.myStorage.getItem("userId"));
    }
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

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
    { value: 'philadelphia', display: 'Philadelphia' },
    { value: 'pittsburgh', display: 'Pittsburgh' },
    { value: 'sanantonio', display: 'San Antonio' },
    { value: 'sandiego', display: 'San Diego' },
    { value: 'sanfrancisco', display: 'San Francisco' },
    { value: 'seattle', display: 'Seattle' },
    { value: 'stlouis', display: 'St. Louis' },
    { value: 'dc', display: 'D.C.' },
];

saveSelections(theOrigin: string, theDest: string) {
  /*for (let key in this.myStorage) {
    console.log("KEY: " + this.myStorage[key]);
  }
  this.currentUser = JSON.parse (this.myStorage['userId']);
  var data = this.myStorage['userId'];
  this.userService.saveSelections(data, theOrigin, theDest)
  .then (
    id => {
      this.theId = id._body;
      console.log(id);
      if (JSON.parse(this.theId) == this.currentUser) {
        this.router.navigateByUrl('/resources');
      } else {
        this.errorMessage = 'error';
      }
    }
  );
  .catch (
    err => {
      this.errorMessage = err;
    }
  );*/
}

  /*ngOnInit(){
    this.stuffs = {
    city1: null,
    city2: null
  }
}*/

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
