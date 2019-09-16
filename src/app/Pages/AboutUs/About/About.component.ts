import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
	selector: 'app-about',
	templateUrl: './About.component.html',
	styleUrls: ['./About.component.scss']
})

export class AboutComponent implements OnInit {
	
	teamContent  : any;
	clientSlider : any;
	socialIcons  : any;
	
	/**
	  * Portfolio client slider config
	  */
	clientSlideConfig  = {"slidesToShow": 5,"slidesToScroll": 1, "cssEase": 'linear', "arrows": false,"fade": false,"dots": false,"autoplay": true, "autoplaySpeed": 1500,
      "responsive": [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 3
            }
         }, {
            breakpoint: 567,
            settings: {
               slidesToShow: 2
            }
         }
      ]};

   /**
	  * team member slider config
	  */
	teamSlideConfig  = {"slidesToShow": 3, "fade": false, "cssEase": 'linear', "dots": false, "slidesToScroll": 1,"arrows": false,"autoplay": true, "autoplaySpeed": 1500,
      "responsive": [
         {
            breakpoint: 1400,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
            }
         }, {
            breakpoint: 567,
            settings: {
               slidesToShow: 1,
            }
         }
      ]};

	constructor(public service : DropletService) { }

	ngOnInit() {
		//team content
		this.service.getTeamContent().
			subscribe(response => {this.teamContent = response['team']},
						 err      => console.log(err),
						 () 		 => this.teamContent
			)

		//client slider content
		this.service.getClientContent().
			subscribe(response => {this.clientSlider = response},
						 err      => console.log(err),
						 ()       => this.clientSlider
			)

		//social icons content
		this.service.getSocialIconsContent().
			subscribe(response => {this.socialIcons = response},
						 err      => console.log(err),
						 ()       => this.socialIcons
			)
	}
}


