import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MenuItems } from '../../../../Core/Menu/MenuItems/MenuItems';

@Component({
  selector: 'app-header-menu',
  templateUrl: './HeaderMenu.component.html',
  styleUrls: ['./HeaderMenu.component.scss']
})

export class MenuComponent implements OnInit {

	@Input() stickyClass : any;
	currentUrl 				: any;

	constructor(public menuItems : MenuItems,
					private router   : Router) { }

	ngOnInit() {
		this.currentUrl = this.router.url;
		//header responsive
		if((this.currentUrl != '/session/comingsoon') && (this.currentUrl != '/session/maintenance') && (this.currentUrl != '/session/login') && (this.currentUrl != '/session/signup2')) {
         var menuItems = document.getElementsByClassName('menu-item-has-child')
         for(var i = 0; i < menuItems.length; i++) {
            (function(index) {
               menuItems[index].addEventListener("click", function(event) {
                  event.stopPropagation();
                  if(menuItems[index]!=undefined){
                     menuItems[index].classList.toggle('opened-submenu');
                  }
               })   
            })(i);
         }
		}
		
	}
}
