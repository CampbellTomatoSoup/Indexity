import { Component, OnInit } from '@angular/core';
import { User } from './api/user.interface';
import { Theme } from './api/theme.interface';

@Component ({
    selector: 'app',
    templateUrl: './app/app.component.html',
    styleUrls: [ './app/app.component.css' ],
})

export class AppComponent {
    title = "Indexity";
}
