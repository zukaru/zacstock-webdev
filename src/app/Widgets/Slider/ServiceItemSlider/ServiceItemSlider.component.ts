import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-service-item-slider',
	templateUrl: './ServiceItemSlider.component.html',
	styleUrls: ['./ServiceItemSlider.component.scss']
})

export class ServiceItemComponent implements OnInit {
	
	@Input() serviceItems 			  : any;
	@Input() serviceSlideConfig	  : any;

	constructor() { }

	ngOnInit() {
	}

}
