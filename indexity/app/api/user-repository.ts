import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions } from '@angular/http';
import { User } from '../api/user';

@Injectable()
export class APIRepository {
private headers = new Headers({'Content-Type': 'application/json'});
private __url = "http://vapeboyz.xyz/api/user/login";

constructor(private http: Http){

	}

public login(user: User) : Promise<string> {
  let options = new RequestOptions({ headers: this.headers });
  const url = this.__url;
  console.log(url);
  return this.http.post(url, JSON.stringify({"username": user.username, "password":user.password}), options)
    .toPromise()
    .then(response => response.json().data.userid as string)
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
