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
const router_1 = require("@angular/router");
const search_repository_1 = require("../api/search-repository");
let SearchComponent = class SearchComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
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
            { value: 'philidelphia', display: 'Philidelphia' },
            { value: 'pittsburgh', display: 'Pittsburgh' },
            { value: 'sanantonio', display: 'San Antonio' },
            { value: 'sandiego', display: 'San Diego' },
            { value: 'sanfransisco', display: 'San Fransisco' },
            { value: 'seattle', display: 'Seattle' },
            { value: 'stlouis', display: 'St. Louis' },
            { value: 'dc', display: 'D.C.' },
        ];
    }
    ngOnInit() {
        this.user = {
            city1: null,
            city2: null
        };
    }
    save(isValid, f) {
        console.log(f);
    }
};
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: './app/search/search.component.html',
        styleUrls: ['./app/search/search.component.css']
    }),
    __metadata("design:paramtypes", [search_repository_1.SearchRepository, router_1.Router])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map
