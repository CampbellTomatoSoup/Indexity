"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    /*
    saved: { city: string, dateSaved: string }[];
    */
    constructor(userId, username, password, email, firstName, lastName, lastCity, currJob, currSalary) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.lastCity = lastCity;
        this.currJob = currJob;
        this.currSalary = currSalary;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map