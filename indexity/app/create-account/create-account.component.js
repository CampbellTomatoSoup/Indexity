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
const user_1 = require("../api/user");
const user_repository_1 = require("../api/user-repository");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let CreateAccountComponent = class CreateAccountComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMessage = null;
        this.mode = 'Promise';
        this.usr = new user_1.User('', '', '', '', '', '');
        this.submitted = false;
    }
    signup(theUser) {
        if (!theUser) {
            return;
        }
        this.userService.signup(theUser)
            .then(id => {
            this.theId = id._body;
            this.usr.userId = this.theId;
            this.myStorage.setItem('userId', this.theId);
            this.myStorage.setItem('user', this.usr);
            console.log("RESPONSE: " + this.theId);
            console.log("STORAGE: " + this.myStorage['userId']);
            if (this.theId != '-1') {
                this.router.navigateByUrl('/search');
            }
            else {
                this.errorMessage = 'error';
            }
        })
            .catch(err => {
            this.errorMessage = err;
        });
    }
    onSubmit() {
        this.submitted = true;
    }
};
CreateAccountComponent = __decorate([
    core_1.Component({
        selector: 'create-account',
        templateUrl: './app/create-account/create-account.component.html',
        styleUrls: ['./app/create-account/create-account.component.css'],
        providers: [user_repository_1.APIRepository]
    }),
    __metadata("design:paramtypes", [user_repository_1.APIRepository, router_1.Router])
], CreateAccountComponent);
exports.CreateAccountComponent = CreateAccountComponent;
//# sourceMappingURL=create-account.component.js.map