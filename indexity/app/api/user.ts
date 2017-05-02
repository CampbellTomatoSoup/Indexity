export class User {
    /*
    id: number
    job: string;
    salary: number;
    saved: { city: string, dateSaved: string }[];
    */

    constructor(
    public userId: string,
    public username: string,
    public password: string,
    public email: string,
    public firstName: string,
    public lastName: string
  ) {  }
}
