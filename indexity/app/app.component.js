"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        this.title = "Indexity";
        this.errorMessage = null;
        /*theId: string;
        usr =  new User('','','','','','','','',0);*/
        this.myStorage = localStorage;
        //constructor (private userService: APIRepository, private router: Router) {}
        this.ngOnInit = {
            if(myStorage, getItem = ("userId") != null) {
                console.log("there's a userid" + this.myStorage.getItem("userId"));
            }
        };
        /*
        login(theUser: User) {
          if (!theUser) { return; }
          this.userService.login(theUser)
          .then (
            id  => {
              this.theId = id._body;
              this.usr.userId = this.theId;
              this.myStorage.setItem('userId', this.theId);
              //this.myStorage.setItem('user', this.usr);
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
        }
        */
    }
    logout() {
        this.currentUser = JSON.parse(this.myStorage['userId']);
        var data = this.myStorage['userId'];
        this.userService.logout(data)
            .then(data => {
            console.log(data);
        })
            .catch(err => {
            this.errorMessage = err;
        });
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: './app/app.component.html',
        styleUrls: ['./app/app.component.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map