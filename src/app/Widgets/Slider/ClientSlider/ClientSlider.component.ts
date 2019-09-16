import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-client-slider',
	templateUrl: './ClientSlider.component.html',
	styleUrls: ['./ClientSlider.component.scss']
})
export class ClientSliderComponent implements OnInit {

	@Input() sliderContent     : any;
	@Input() clientSlideConfig : any;
	
	constructor() { }

	ngOnInit() {
	}

}
