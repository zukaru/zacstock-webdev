import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-grid',
  templateUrl: './ServiceGrid.component.html',
  styleUrls: ['./ServiceGrid.component.scss']
})
export class ServiceGridComponent implements OnInit {

	@Input() serviceItems : any;

	constructor() { }

	ngOnInit() {
	}

}
