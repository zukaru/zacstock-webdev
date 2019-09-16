import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-banner-v2',
	templateUrl: './BannerV2.component.html',
	styleUrls: ['./BannerV2.component.scss']
})
export class BannerV2Component implements OnInit {

	@Input() pageTitle : any;
	
	constructor() { }

	ngOnInit() {
	}

}
