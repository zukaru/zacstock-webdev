import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './Tag.component.html',
  styleUrls: ['./Tag.component.scss']
})
export class TagComponent implements OnInit {
	
	@Input() tags : any;

	constructor() { }

	ngOnInit() {
	}

}
