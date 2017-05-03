"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
//import { User } from '../api/user.interface';
//import { Theme } from '../api/theme.interface';
const user_1 = require("../api/user");
const selection_1 = require("../api/selection");
const user_repository_1 = require("../api/user-repository");
const router_1 = require("@angular/router");
class Stuff {
}
exports.Stuff = Stuff;
let SearchComponent = class SearchComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMessage = null;
        this.origin = null;
        this.dest = null;
        this.usr = new user_1.User('', '', '', '', '', '', '', '', 0);
        this.selec = new selection_1.Selection(false, false, false, false, false, false, false);
        this.myStorage = localStorage;
        this.submitted = false;
        //a list of the cities
        this.cities = [
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
    }
    onSubmit() {
        this.submitted = true;
    }
    saveSelections(theOrigin, theDest) {
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
    save() {
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
};
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: './app/search/search.component.html',
        styleUrls: ['./app/search/search.component.css'],
        providers: [user_repository_1.APIRepository]
    }),
    __metadata("design:paramtypes", [user_repository_1.APIRepository, router_1.Router])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map