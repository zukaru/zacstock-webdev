import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
  selector: 'app-team',
  templateUrl: './Team.component.html',
  styleUrls: ['./Team.component.scss']
})
export class TeamComponent implements OnInit {

	teamContent : any;

	constructor(public service : DropletService) { }

	ngOnInit() {
      //team content
		this.service.getTeamContent().
			subscribe(response => {this.teamContent = response},
						 err      => console.log(err),
						 () 		 => this.teamContent
			)

	}

   /**
     * team member slider config
     */
   teamSlideConfig  = {"slidesToShow": 3, "cssEase": 'linear', "fade": false, "dots": false, "slidesToScroll": 1,"arrows": false,"autoplay": true, "autoplaySpeed": 1500,
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
      ]
   };
}
