import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-v2',
  templateUrl: './SearchV2.component.html',
  styleUrls: ['./SearchV2.component.scss']
})
export class SearchV2Component implements OnInit {

	@Input() btnContent : any;
	
	constructor() { }

	ngOnInit() {
	}

}
