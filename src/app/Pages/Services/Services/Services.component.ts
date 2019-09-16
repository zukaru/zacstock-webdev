import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
	selector: 'app-services',
	templateUrl: './Services.component.html',
	styleUrls: ['./Services.component.scss']
})

export class ServicesComponent implements OnInit {

	serviceItems : any;

	/**
	  * Portfolio client slider config
	  */
   serviceItemSlideConfig  = {"slidesToShow": 4, "slidesToScroll": 1, "cssEase": 'linear', "arrows": false,"dots": false,"autoplay": true, "autoplaySpeed": 6500,
   responsive: [
      {
         breakpoint: 1280,
         settings: {
            slidesToShow: 3,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 1
         }
      }
   ]};

	constructor(private service : DropletService) { }

	ngOnInit() {
      //service content
		this.service.getServiceContent().
			subscribe( response => {this.serviceItems = response },
						  err      => console.log(err),
						  ()       => this.serviceItems
			);
	}

}
