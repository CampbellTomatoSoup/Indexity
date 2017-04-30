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
//import { APIRepository } from '../api/user-repository.service';
const user_1 = require("../api/user");
const user_repository_1 = require("../api/user-repository");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let LandingComponent = class LandingComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMessage = null;
        this.mode = 'Promise';
        this.usr = new user_1.User('', '');
        this.submitted = false;
    }
    verify(usr, pswd) {
        this.usr.username = usr;
        this.usr.password = pswd;
        console.log(this.usr);
    }
    login(theUser) {
        console.log(theUser);
        if (!theUser) {
            return;
        }
        this.userService.login(theUser)
            .then(id => {
            this.theId = id;
            //console.log(theId);
            //this.router.navigateByUrl('/search');
        })
            .catch(err => {
            alert('login failed!');
            this.errorMessage = err;
        });
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
    goBack() {
        this.location.back();
    }
    onSubmit() {
        this.submitted = true;
    }
};
LandingComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        selector: 'landing',
        templateUrl: './app/landing/landing.component.html',
        styleUrls: ['./app/landing/landing.component.css'],
        providers: [user_repository_1.APIRepository]
    }),
    __metadata("design:paramtypes", [user_repository_1.APIRepository, router_1.Router])
], LandingComponent);
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map