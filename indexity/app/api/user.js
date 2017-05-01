"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    //id: number
    /*firstName: string;
    lastName: string;
    job: string;
    salary: number;
    password: string;
    saved: { city: string, dateSaved: string }[];*/
    constructor(username, password, email, firstName, lastName, age) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map