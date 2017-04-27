import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserRepository {
/*
	private _users: User[];

	private getIndex(id : number){
		for (var i = this._users.length; i--;) {
			var user = this._users[i];
			if(user.id == id) return i;
		}
		return -1;
	}

	constructor(){
		this._users = [
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
		];
	}

	public list() : User[] {
		return this._users;
	}

	public get(id : number) : User {
		var index = this.getIndex(id);
		return this._users[index];
	}

	public add(user: User) {
		user.id = this._users.length + 1;
		this._users.push(user);
	}

	public update(user: User) {
		var index = this.getIndex(user.id);
		this._users[index] = user;
	}

	public delete(id : number) {
		var index = this.getIndex(id);
		this._users.splice(index, 1);
	}*/
}
