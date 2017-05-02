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
require("rxjs/add/operator/toPromise");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
let APIRepository = class APIRepository {
    constructor(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.__url = "http://54.213.29.40/api";
    }
    extractData(res) {
        let body = res.json();
        return body.data || {};
    }
    login(user) {
        let options = new http_1.RequestOptions({ headers: this.headers });
        const url = this.__url;
        //the url is url + /login to access the login page.
        return this.http.post(url + '/login', { "username": user.username, "password": user.password })
            .toPromise()
            .then(this.extractData.userid)
            .catch(this.handleError);
    }
    signup(user) {
        let options = new http_1.RequestOptions({ headers: this.headers });
        const url = this.__url;
        //the url is url + /login to access the login page.
        return this.http.post(url + '/signup', { "email": user.email, "username": user.username, "password": user.password, "firstName": user.firstName, "lastName": user.lastName })
            .toPromise()
            .then(this.extractData.userid)
            .catch(this.handleError);
    }
    changePassword(theId, oldpass, user) {
        let options = new http_1.RequestOptions({ headers: this.headers });
        const url = this.__url;
        return this.http.post(url + '/changepassword', { "userId": theId, "oldPassword": oldpass, "newPassword": user.password })
            .toPromise()
            .then(this.extractData.userid)
            .catch(this.handleError);
    }
    editAccount(theId, user) {
        let options = new http_1.RequestOptions({ headers: this.headers });
        const url = this.__url;
        return this.http.post(url + '/edit', { "firstName": user.firstName, "lastName": user.lastName, "lastCity": user.lastCity, "currJob": user.currJob, "currSalary": user.currSalary, "userId": theId, "password": user.password })
            .toPromise()
            .then(this.extractData.userid)
            .catch(this.handleError);
        // error if username or email
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};
APIRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], APIRepository);
exports.APIRepository = APIRepository;
//# sourceMappingURL=user-repository.js.map