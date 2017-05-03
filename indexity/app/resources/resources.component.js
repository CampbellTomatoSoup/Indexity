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
const user_repository_1 = require("../api/user-repository");
const router_1 = require("@angular/router");
const user_1 = require("../api/user");
let ResourcesComponent = class ResourcesComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMessage = null;
        this.usr = new user_1.User('', '', '', '', '', '', '', '', 0);
        this.myStorage = localStorage;
    }
    ngOnInit() {
        /*
                    this.userService.getResources() {
                        .then((result) => {
                    this.result =
                    this.result =
                    this.result =
                    this.result =
                    this.result =
                    this.result =
                    this.result =
                })
                .catch((error) => console.error(error));
            }
        }
        */
        /*handleError(error: any): Promise<any> {
             console.error('An error occurred', error);
             return Promise.reject(error.message || error);
           }
    
    
    submitted = false;
    onSubmit() {
        this.submitted = true;
        }
     }
     */
    }
};
ResourcesComponent = __decorate([
    core_1.Component({
        selector: 'resources',
        templateUrl: './app/resources/resources.component.html',
        styleUrls: ['./app/resources/resources.component.css'],
        providers: [user_repository_1.APIRepository]
    }),
    __metadata("design:paramtypes", [user_repository_1.APIRepository, router_1.Router])
], ResourcesComponent);
exports.ResourcesComponent = ResourcesComponent;
//# sourceMappingURL=resources.component.js.map