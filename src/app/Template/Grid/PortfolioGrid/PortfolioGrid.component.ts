import { Component, OnInit, Input } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';
import { Router } from '@angular/router';
declare var $ : any;

@Component({
	selector: 'app-portfolio-grid-content',
	templateUrl: './PortfolioGrid.component.html',
	styleUrls: ['./PortfolioGrid.component.scss']
})
export class PortfolioGridComponent implements OnInit {

	@Input() portfolioContent	: any;
	currentUrl 						: any;

	constructor(private service : DropletService,
					public router : Router) { }

	ngOnInit() {
		this.currentUrl = this.router.url;
	}

	/**
	  * if url is home page then pop up show otherwise
	  * Route to portfolio detail page.
	  * Also data from the clicked portfolio grid will be transferred to portfolio detail page.
	  */
	portfolioGridContent(data) {
		if(this.router.url == '/'){
			$('.image-link').magnificPopup({
				type: 'image',
				mainClass: 'mfp-with-zoom',
			});
		}else{
			this.router.navigate(['/portfolio',data.category,data.id]);
			this.service.portfolioContent = data;
		}
	}

}
