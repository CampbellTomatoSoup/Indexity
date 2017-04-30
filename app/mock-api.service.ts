import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MockApiService implements InMemoryDbService {

    dataStore = {
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

    createDb() {
        return this.dataStore['default'];
    }
}