import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../../../Core/Menu/MenuItems/MenuItems';
import { Router, NavigationEnd } from '@angular/router';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
  selector: 'app-footer-one',
  templateUrl: './FooterOne.component.html',
  styleUrls: ['./FooterOne.component.scss']
})
export class FooterOneComponent implements OnInit {

	currentUrl  : any;
	socialIcons : any;

	constructor(public footerMenu : MenuItems,
					private router		: Router,
					public service 	: DropletService) { }

	ngOnInit() {
		this.router.events
			.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.currentUrl = event.url;
			}
		});
		this.currentUrl = this.router.url;
		
		//social icons content
		this.service.getSocialIconsContent().
			subscribe(response => {this.socialIcons = response},
						 err      => console.log(err),
						 ()       => this.socialIcons
			)
	}

}
