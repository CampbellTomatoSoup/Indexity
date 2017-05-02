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
let EditAccountComponent = class EditAccountComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.pwMessage = null;
        this.mode = 'Promise';
        this.usr = new user_1.User('', '', '', '', '', '');
        this.myStorage = localStorage;
        this.submitted = false;
        //this.token = currentUser && currentUser.token;
    }
    changePassword(theUser) {
        // currentUser is what's in localStorage
        this.currentUser = JSON.parse(this.myStorage['userId']);
        //console.log("STORAGEID: " + this.currentUser);
        var data = this.myStorage['userId'];
        console.log("STORAGEID: " + this.currentUser + "\tIDTOSEND: " + data + "\tOLDPASS: " + this.oldPass, "\tUSERPASS: " + this.usr.password);
        if (!theUser) {
            return;
        }
        this.userService.changePassword(data, this.oldPass, theUser)
            .then(id => {
            this.theId = JSON.parse(id._body);
            console.log("RESPONSEID: " + this.theId);
            console.log("STORAGEID: " + this.currentUser);
            console.log("JSONPARSE: " + JSON.parse(this.theId));
            if (JSON.parse(this.theId) == this.currentUser) {
                // if old password matches old pass
                this.pwMessage = 'awesome pw';
                //console.log("password success! (MAYBE)");
            }
            else {
                console.log("password fail...");
            }
            //if (this.theId != '-1') { this.router.navigateByUrl('/search'); }
            //else { this.errorMessage = 'error'; }
        })
            .catch(err => {
            console.log(err);
            this.errorMessage = err;
        });
    }
    onSubmit() {
        this.submitted = true;
    }
};
EditAccountComponent = __decorate([
    core_1.Component({
        selector: 'edit-account',
        templateUrl: './app/edit-account/edit-account.component.html',
        styleUrls: ['./app/edit-account/edit-account.component.css'],
        providers: [user_repository_1.APIRepository]
    }),
    __metadata("design:paramtypes", [user_repository_1.APIRepository, router_1.Router])
], EditAccountComponent);
exports.EditAccountComponent = EditAccountComponent;
//# sourceMappingURL=edit-account.component.js.map