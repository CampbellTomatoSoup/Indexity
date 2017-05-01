export class User {


    //id: number
    /*firstName: string;
    lastName: string;
    job: string;
    salary: number;
    password: string;
    saved: { city: string, dateSaved: string }[];*/

    constructor(
    public username: string,
    public password: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public age: number
  ) {  }
}
