import { Component, OnInit } from '@angular/core';
import { User } from '../api/user.interface';
import { Theme } from '../api/theme.interface';

@Component({
  selector: 'search',
  templateUrl: './app/search/search.component.html',
  styleUrls: ['./app/search/search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() { }

  public user: User;

  public cities = [
    { value: 'austin', display: 'Austin' },
    { value: 'baltimore', display: 'Baltimore' },
    { value: 'boston', display: 'Boston' },
    { value: 'columbus', display: 'Columbus' },
    { value: 'dallas', display: 'Dallas' },
    { value: 'denver', display: 'Denver' },
    { value: 'detroit', display: 'Detroit' },
    { value: 'honolulu', display: 'Honolulu' },
    { value: 'houston', display: 'Houston' },
    { value: 'lasvegas', display: 'Las Vegas' },
    { value: 'losangeles', display: 'Los Angeles' },
    { value: 'memphis', display: 'Memphis' },
    { value: 'newyork', display: 'New York' },
    { value: 'orlando', display: 'Orlando' },
    { value: 'philidelphia', display: 'Philidelphia' },
    { value: 'pittsburgh', display: 'Pittsburgh' },
    { value: 'sanantonio', display: 'San Antonio' },
    { value: 'sandiego', display: 'San Diego' },
    { value: 'sanfransisco', display: 'San Fransisco' },
    { value: 'seattle', display: 'Seattle' },
    { value: 'stlouis', display: 'St. Louis' },
    { value: 'dc', display: 'D.C.' },
];

  ngOnInit(){
    this.user = {
    city: null,
  }
}

public save(isValid: boolean, f: User) {
        console.log(f);
    }
  }
