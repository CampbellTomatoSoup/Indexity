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
    .then (
			this.extractData.userid
		)
    .catch(this.handleError);
}

public changePassword(theId: string, user: User) : Promise<any> {
  let options = new RequestOptions({ headers: this.headers });
  const url = this.__url;
	//the url is url + /login to access the login page.
  return this.http.post(url + '/changepassword', {"userId": theId, "password":user.password})
	/*.map((response: Response) => {
							// login successful if there's a jwt token in the response
							let user = response.json();
							if (user && user.token) {
									// store user details and jwt token in local storage to keep user logged in between page refreshes
									localStorage.setItem('currentUser', JSON.stringify(user));
							}
					});*/
		.toPromise()
    .then (
			this.extractData.userid
		)
    .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
