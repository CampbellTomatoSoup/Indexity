"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { APIRepository } from '../api/user-repository.service';
const user_1 = require("../api/user");
const core_1 = require("@angular/core");
let LandingComponent = class LandingComponent {
    constructor() {
        this.usr = new user_1.User('', '');
        //constructor (private router: Router, private route: ActivatedRoute, private movieRepository: UserRepository) { }
        /*ngOnInit() {
              this.route.params.subscribe (x => {
                  this.loadUser(+x['id']);
              });
          }*/
        this.submitted = false;
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
    /*constructor(
      private userService: APIRepository,
      private route: ActivatedRoute,
      private location: Location
    ) {}*/
    verify(usr, pswd) {
        this.usr.userName = usr;
        this.usr.password = pswd;
        console.log(this.usr);
        //this.userService.login(this.usr)
        //.then(() => this.goBack());
    }
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
        styleUrls: ['./app/landing/landing.component.css']
    })
], LandingComponent);
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map