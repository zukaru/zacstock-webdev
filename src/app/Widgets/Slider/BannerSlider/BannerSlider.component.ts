import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './BannerSlider.component.html',
  styleUrls: ['./BannerSlider.component.scss']
})
export class BannerSliderComponent implements OnInit {

	@Input() bannerSliderConfig : any;
	
	@Input() bannerSliderContent : any;

	constructor() { }

	ngOnInit() {
	}

}
