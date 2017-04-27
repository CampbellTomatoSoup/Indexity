import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Headers} from '@angular/http';
import { User } from '../api/user';

@Injectable()
export class APIRepository {
private headers = new Headers({'Content-Type': 'application/json'});
private __url = "54.213.29.40/api";

constructor(private http: Http){

	}

public login(user: User) : Promise<User> {
  const url = `${this.__url}/user`;
  return this.http.post(url, `{"username": ${user.userName}, password: ${user.password}`, this.headers)
    .toPromise()
    .then(response => response.json().data as User)
    .catch(this.handleError);
}

public verify(username: string, password: string): Promise<User> {
  const url = `${this.__url}`;
  return this.http.get(url)
  .toPromise()
  .then(response => response.json().data as User)
  .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
