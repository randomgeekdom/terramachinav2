import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    @Input() public sidebarMenuOpened = true;
    public user;
    public menu = MENU;

    constructor(public appService: AppService, private router:Router) {}

    ngOnInit() {
        this.user = this.appService.user;
    }
}

export const MENU = [
    {
        name: 'Home',
        path: ['/'],
        icon: "home"
    },
    {
        name: 'Blank',
        path: ['/blank']
    },
    {
        name: 'Main Menu',
        children: [
            {
                name: 'Sub Menu',
                path: ['/sub-menu-1']
            },

            {
                name: 'Blank',
                path: ['/sub-menu-2']
            }
        ]
    }
];
