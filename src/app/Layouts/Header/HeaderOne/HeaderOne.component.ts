import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-header-one',
	templateUrl: './HeaderOne.component.html',
	styleUrls: ['./HeaderOne.component.scss']
})
export class HeaderOneComponent implements OnInit {

	currentUrl: any;

	constructor(private router : Router) { }
	ngOnInit() {
		this.currentUrl = this.router.url;
		//classes add or remove on header section.
		this.router.events
			.subscribe((event) => {
				if (event instanceof NavigationEnd) {
					this.currentUrl = event.url;
					if((this.currentUrl != '/session/comingsoon') && (this.currentUrl != '/session/maintenance') && (this.currentUrl != '/session/login') && (this.currentUrl != '/session/signup2')) {
                  document.documentElement.classList.remove('resp-menu-opened');
                  document.getElementById('main-header').classList.remove('show');
                  if(this.currentUrl=='/'){
                     document.getElementById('header-sec').className += " header-transparent";
                  }
                  else{
                     document.getElementById('header-sec').classList.remove('header-transparent');
                  }
               }
               else{
               	 document.documentElement.classList.remove('resp-menu-opened');
               }

				}
			});

		//header responsive
		if((this.currentUrl != '/session/comingsoon') && (this.currentUrl != '/session/maintenance') && (this.currentUrl != '/session/login') && (this.currentUrl != '/session/signup2')) {
         var navbar = document.getElementsByClassName('navbar-toggler');
         for(var i=0; i <navbar.length; i++ ){
            (function(index){
               navbar[index].addEventListener("click", function(event){
                  document.documentElement.classList.toggle('resp-menu-opened');
               })
            })(i);
         }
		}

	}

}
