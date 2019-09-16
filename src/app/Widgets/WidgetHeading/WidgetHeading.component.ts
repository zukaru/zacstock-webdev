import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-widget-heading',
	templateUrl: './WidgetHeading.component.html',
	styleUrls: ['./WidgetHeading.component.scss']
})

export class WidgetHeadingComponent implements OnInit {
	
	@Input() contentHeading : any;

	constructor() { }

	ngOnInit() {
  	}

}
