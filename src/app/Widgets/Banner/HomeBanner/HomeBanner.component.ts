import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './HomeBanner.component.html',
  styleUrls: ['./HomeBanner.component.scss']
})
export class HomeBannerComponent implements OnInit {

	bannerContent : any;

	bannerConfig  = {"slidesToShow": 1, "slidesToScroll": 1,"arrows": false, "fade": true, "cssEase": 'linear',"dots": true,"autoplay": true, "autoplaySpeed": 5000};

	constructor(private service : DropletService) { }

	ngOnInit() {
		//home banner content
		this.service.getHomeBannerContent().
			subscribe( response => { this.bannerContent = response},
						  err      => console.log(err),
						  ()       => this.bannerContent
			);
	}

}
