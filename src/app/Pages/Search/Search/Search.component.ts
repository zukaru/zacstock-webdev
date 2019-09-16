import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
	selector: 'app-search',
	templateUrl: './Search.component.html',
	styleUrls: ['./Search.component.scss']
})

export class SearchComponent implements OnInit {

	searchContent : any;

	constructor(private service : DropletService) { }

	ngOnInit() {
		//get search content
		this.service.getSearchContent().
			subscribe( res => { this.searchContent = res},
					   err => console.log(err),
					   ()  => this.searchContent
			);
	}

}
