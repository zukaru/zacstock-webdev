import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.component.scss']
})
export class BannerComponent implements OnInit {

	@Input() pageTitle : any;
	currentUrl 			 : any;
	
	constructor(private router : Router) { }

	ngOnInit() {
		this.currentUrl = this.router.url.split('/').splice(-1,1);
	}

}
