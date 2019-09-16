import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-client-says',
	templateUrl: './ClientSays.component.html',
	styleUrls: ['./ClientSays.component.scss']
})

export class ClientSaysComponent implements OnInit {

	@Input() clientSaysHeading 		: any;
	@Input() testimonialContent		: any;
	
	/**
	  * Testimonial slider config
	  */
	testimonialSlideConfig  = {"slidesToShow": 1, "slidesToScroll": 1, "rtl": false, "cssEase": 'linear', "fade":true,"arrows": true,"dots": true,"autoplay": true, "autoplaySpeed": 2000,
      "responsive": [
         {
            breakpoint: 1200,
            settings: {
               arrows: false,
            }
         }
      ]};
	
	constructor() { }

	ngOnInit() {
	}

}
