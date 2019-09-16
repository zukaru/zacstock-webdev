import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './Categories.component.html',
  styleUrls: ['./Categories.component.scss']
})
export class CategoriesComponent implements OnInit {

	@Input() categories : any;

	constructor() { }

	ngOnInit() {
	}

}
