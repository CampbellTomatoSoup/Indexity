"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let MockApiService = class MockApiService {
    constructor() {
        this.dataStore = {
            default: {
                users: [
                    {
                        id: 1,
                        userName: "map",
                        firstName: "Michelle",
                        lastName: "A",
                        job: "Scientist",
                        salary: 10000,
                        password: "1234",
                        saved: [
                            { city: 'Austin', dateSaved: '4/2/16' },
                            { city: 'Los Angeles', dateSaved: '4/21/16' }
                        ]
                    },
                    {
                        id: 2,
                        userName: "cko",
                        firstName: "Campbell",
                        lastName: "K",
                        job: "CEO",
                        salary: 1000000,
                        password: "5678",
                        saved: [
                            { city: 'Austin', dateSaved: '4/2/16' },
                            { city: 'New York City', dateSaved: '4/22/16' }
                        ]
                    }
                ]
            },
            empty: {
                users: []
            }
        };
    }
    createDb() {
        return this.dataStore['default'];
    }
};
MockApiService = __decorate([
    core_1.Injectable()
], MockApiService);
exports.MockApiService = MockApiService;
//# sourceMappingURL=mock-api.service.js.map