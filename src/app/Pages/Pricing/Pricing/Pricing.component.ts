import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
	selector: 'app-pricing',
	templateUrl: './Pricing.component.html',
	styleUrls: ['./Pricing.component.scss']
})

export class PricingComponent implements OnInit {

	pricingContent : any;

	constructor(private service : DropletService) { }

	ngOnInit() {
		//pricing content
		this.service.getPricingContent().
			subscribe(res => {this.pricingContent = res},
						 err => console.log(err),
						 ()  => this.pricingContent
			);
	}

}
