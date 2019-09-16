import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-counter',
	templateUrl: './Counter.component.html',
	styleUrls: ['./Counter.component.scss']
})
export class CounterComponent implements OnInit {

	@Input() CounterContent : any;

	constructor() { }

	ngOnInit() {
	}

}
