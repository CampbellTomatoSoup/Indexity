"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    /*
    id: number
    job: string;
    salary: number;
    saved: { city: string, dateSaved: string }[];
    */
    constructor(userId, username, password, email, firstName, lastName) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map