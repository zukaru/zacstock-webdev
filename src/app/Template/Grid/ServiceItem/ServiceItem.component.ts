import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './ServiceItem.component.html',
  styleUrls: ['./ServiceItem.component.scss']
})
export class ServiceItemComponent implements OnInit {

	@Input() serviceItem: any;

	constructor() { }

	ngOnInit() {
	}

}
