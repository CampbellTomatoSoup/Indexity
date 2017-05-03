import { Component, OnInit } from '@angular/core';
import { User } from '../api/user';
import { APIRepository } from '../api/user-repository';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component ({
    selector: 'app',
    templateUrl: './app/app.component.html',
    styleUrls: [ './app/app.component.css' ],
    //providers: [ APIRepository ]
})

export class AppComponent {
    title = "Indexity";
    errorMessage: null | string = null;
    /*theId: string;
    usr =  new User('','','','','','','','',0);*/
    myStorage = localStorage;
    currentUser: string;
    //constructor (private userService: APIRepository, private router: Router) {}

    ngOnInit {
      if (this.myStorage.getItem("userId") != null) { // ===
        console.log("there's a userid" + this.myStorage.getItem("userId"));
      }
    }

    logout() {
      this.currentUser = JSON.parse (this.myStorage['userId']);
  		var data = this.myStorage['userId'];
      this.userService.logout(data)
      .then (
        data => {
          console.log(data);
        }
      )
      .catch (
        err => {
          this.errorMessage = err;
        }
      );
    }

    /*
    login(theUser: User) {
      if (!theUser) { return; }
      this.userService.login(theUser)
      .then (
        id  => {
          this.theId = id._body;
          this.usr.userId = this.theId;
          this.myStorage.setItem('userId', this.theId);
          //this.myStorage.setItem('user', this.usr);
          //this.myStorage.setItem('currentUser', JSON.stringify (this.usr));
          if (this.theId != '-1') {
            this.router.navigateByUrl('/search');
          }
          else { this.errorMessage = 'error'; }
        })
      .catch(
        err => {
          this.errorMessage = err;
        }
      );
    }
    */
}
