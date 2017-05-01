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
require("rxjs/add/operator/toPromise");
const http_2 = require("@angular/http");
let SearchRepository = class SearchRepository {
    constructor(http) {
        this.http = http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.__url = "http://54.213.29.40/api";
    }
    saveOrigin() {
    }
    saveDestination() {
    }
    saveSelections() {
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};
SearchRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SearchRepository);
exports.SearchRepository = SearchRepository;
//# sourceMappingURL=search-repository.js.map