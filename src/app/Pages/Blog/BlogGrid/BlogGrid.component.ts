import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './BlogGrid.component.html',
  styleUrls: ['./BlogGrid.component.scss']
})
export class BlogGridComponent implements OnInit {

	blogGrid : any;

	/**
	  * Number of page items
	  */
	paginationItems : any [] = [
		"1",
		"2",
		"3"
	]

	constructor(public service : DropletService) { }

	ngOnInit() {
		//get blog content
		this.service.getBlogContent().
			subscribe( response => { this.blogGrid = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.blogGrid
	           	);
	}

}
