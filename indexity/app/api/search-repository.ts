import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions } from '@angular/http';
import { Search } from '../api/search';

@Injectable()
export class SearchRepository {
private headers = new Headers({'Content-Type': 'application/json'});

//the cities
cities?: string;

private __url = "http://54.213.29.40/api";

constructor(private http: Http){

	}


private saveOrigin() {

}

private saveDestination() {

}

private saveSelections() {

}

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }

}
