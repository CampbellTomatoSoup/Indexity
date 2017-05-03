import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../api/user';

@Injectable()
export class APIRepository {
private headers = new Headers({'Content-Type': 'application/json'});

private __url = "http://54.213.29.40/api";

constructor(private http: Http) { }

	private extractData (res: Response) {
	  let body = res.json();
	  return body.data || { };
	}

public login(user: User) : Promise<any> {
  let options = new RequestOptions({ headers: this.headers });
  const url = this.__url;
	//the url is url + /login to access the login page.
  return this.http.post(url + '/login', {"username": user.username, "password":user.password})
    .toPromise()
    .then (
			this.extractData.userid
		)
    .catch(this.handleError);
}

public signup(user: User) : Promise<any> {
  let options = new RequestOptions({ headers: this.headers });
  const url = this.__url;
	//the url is url + /login to access the login page.
  return this.http.post(url + '/signup', {"email":user.email, "username": user.username, "password":user.password, "firstName":user.firstName, "lastName":user.lastName})
    .toPromise()
    .then ( this.extractData.userid )
    .catch(this.handleError);
}

public changePassword(theId: string, oldpass: string, user: User) : Promise<any> {
  let options = new RequestOptions({ headers: this.headers });
  const url = this.__url;
  return this.http.post(url + '/changepassword', {"userId": theId, "oldPassword": oldpass, "newPassword":user.password})
		.toPromise()
    .then ( this.extractData.userid )
    .catch(this.handleError);
}

public editAccount(theId: string, user: User) : Promise<any> {
  let options = new RequestOptions({ headers: this.headers });
  const url = this.__url;
  return this.http.post(url + '/edit', {"firstName":user.firstName, "lastName":user.lastName,"lastCity":user.lastCity, "currJob":user.currJob, "currSalary":user.currSalary, "userId":theId})
		.toPromise()
    .then ( this.extractData.userid )
    .catch ( this.handleError );
}

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
