"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const resources_component_1 = require("./resources/resources.component");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const landing_component_1 = require("./landing/landing.component");
const create_account_component_1 = require("./create-account/create-account.component");
const edit_account_component_1 = require("./edit-account/edit-account.component");
const user_repository_1 = require("./api/user-repository");
const search_component_1 = require("./search/search.component");
const compare_component_1 = require("./compare/compare.component");
const search_repository_1 = require("./api/search-repository");
var routes = [
    {
        path: '',
        component: landing_component_1.LandingComponent
    },
    {
        path: 'create-account',
        component: create_account_component_1.CreateAccountComponent
    },
    {
        path: 'edit-account',
        component: edit_account_component_1.EditAccountComponent
    },
    {
        path: 'resources',
        component: resources_component_1.ResourcesComponent
    },
    {
        path: 'search',
        component: search_component_1.SearchComponent
    },
    {
        path: 'compare',
        component: compare_component_1.CompareComponent
    }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(routes),
            http_1.HttpModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            landing_component_1.LandingComponent,
            create_account_component_1.CreateAccountComponent,
            edit_account_component_1.EditAccountComponent,
            resources_component_1.ResourcesComponent,
            search_component_1.SearchComponent,
            compare_component_1.CompareComponent
        ],
        providers: [
            user_repository_1.APIRepository,
            search_repository_1.SearchRepository
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map