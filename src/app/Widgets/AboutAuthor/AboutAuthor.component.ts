import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-about-author',
	templateUrl: './AboutAuthor.component.html',
	styleUrls: ['./AboutAuthor.component.scss']
})
export class AboutAuthorComponent implements OnInit {

	@Input() aboutAuthor : any;
	
	constructor() { 
	}

	ngOnInit() {
	}

}
