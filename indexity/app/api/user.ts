export class User {
    /*
    saved: { city: string, dateSaved: string }[];
    */

    constructor (
      public userId: string,
      public username: string,
      public password: string,
      public email: string,
      public firstName: string,
      public lastName: string,
      public lastCity: string,
      public currJob: string,
      public currSalary: number
    ) { }
}
