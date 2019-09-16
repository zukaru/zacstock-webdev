import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';
declare var $ : any;
import { Router, ActivatedRoute, Params }   from '@angular/router';

@Component({
	selector: 'app-portfolio-grid',
	templateUrl: './PortfolioGrid.component.html',
	styleUrls: ['./PortfolioGrid.component.scss']
})

export class PortfolioGridComponent implements OnInit {
 	type         		: any;
	portfolioContent 	: any;
	teamContent 		: any;
	clientSlider		: any;
	showWebsiteData 	: number = 6;
	showAdsData		   : number = 6;
	showMobileData    : number = 6;
	showbrandingData  : number = 6;
	category : any;
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
            breakpoint: 421,
            settings: {
               slidesToShow: 2
            }
         }
      ]};

	constructor(private service : DropletService,
					private route: ActivatedRoute) { }

	ngOnInit() {

		//portfolio content
		this.service.getPortfolioContent().
			subscribe( response => { this.portfolioContent = response},
						  err 	  => console.log(err),
						  ()       => this.portfolioContent
			)

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

		//video pop up
		$('.video-popup').magnificPopup({
	      type: 'iframe',
	      iframe: {
	         patterns: {
	            youtube: {
	               index: 'youtube.com/',
	               id: function (url) {
	                  var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
	                  if (!m || !m[1]) return null;
	                  return m[1];
	               },
	               src: 'https://www.youtube.com/embed/rbTVvpHF4cU'
	            }
	         }
	      }
	   });
	}

	/**
	 * getPortfolioByCategory method is used to get the category of portfolio.
	 */
	getPortfolioByCategory (category) {
		let portfolioContentByCategory = [];
		if(this.portfolioContent && this.portfolioContent.length > 0){
			for(let content of this.portfolioContent){
				if(content.category == category){
					portfolioContentByCategory.push(content)
				}
			}
			return portfolioContentByCategory;
		}
	}

	/**
	 * loadMore method is used to show the more portfolio grid content.
	 */
	loadMore(type) {
		document.getElementsByClassName('portfolio-load-more')[0].classList.toggle('load-more-content');
		if(document.getElementsByClassName('portfolio-load-more')[0].classList.contains('load-more-content')) {
			document.getElementById('show-more-'+type).innerHTML = "Show Less";
			 switch (type) {
			   case 'Business':
					this.showWebsiteData = this.portfolioContent.length;
					break;
			   case 'Consulting':
					this.showAdsData = this.portfolioContent.length;
					break;
			   case 'Journal':
					this.showMobileData = this.portfolioContent.length;
					break;
			   case 'Research':
					this.showbrandingData = this.portfolioContent.length;
					break;
			   default:
			}
		} else {
			document.getElementById('show-more-'+type).innerHTML = "Show More";
			this.showWebsiteData 	= 6;
			this.showAdsData		   = 6;
			this.showMobileData     = 6;
			this.showbrandingData   = 6;
		}
	}

}
