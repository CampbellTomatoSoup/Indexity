import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions } from '@angular/http';
import { User } from '../api/user';

@Injectable()
export class APIRepository {
private headers = new Headers({'Content-Type': 'application/json'});

private __url = "http://54.213.29.40/api";

constructor(private http: Http){

	}

public login(user: User) : Promise<string> {
  let options = new RequestOptions({ headers: this.headers });
  const url = this.__url;
	//the url is url + /login to access the login page.
  return this.http.post(url + '/login', {"username": user.username, "password":user.password})
    .toPromise()
    .then(response => res => (<Response>res).json().data.userid as string)
    .catch(this.handleError);
}

public verify(username: string, password: string): Promise<User> {
  const url = `${this.__url}`;
  return this.http.get(url)
	/* if the value returned is -1, then go to handleError. else log in. */
  .toPromise()
  .then(response => res => (<Response>res).json().data as User)
  .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
