import { Component } from '@angular/core';
import { UserRepo } from './api/user-repository';

@Component ({
    selector: 'app',
    templateUrl: './app/app.component.html',
    styleUrls: [ './app/app.component.css' ],
})

export class AppComponent {
    title = "Indexity";
    userRepo : UserRepo;
}