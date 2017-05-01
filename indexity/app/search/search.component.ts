import { Component, OnInit } from '@angular/core';
import { User } from '../api/user';

@Component({
  selector: 'search',
  templateUrl: './app/search/search.component.html',
  styleUrls: ['./app/search/search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    this.User = {
    city: null,
  }
}
}
