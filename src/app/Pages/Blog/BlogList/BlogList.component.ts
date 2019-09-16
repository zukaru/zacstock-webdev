import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
	selector: 'app-blog-list',
	templateUrl: './BlogList.component.html',
	styleUrls: ['./BlogList.component.scss']
})

export class BlogListComponent implements OnInit {

	blogList  		 : any;
	categories      : any;
	tags 		       : any;
	recentComments  : any;
	
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
			subscribe( response => { this.blogList = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.blogList
	        );
		//get catrgory content
	   this.service.getCategoryContent().
			subscribe( response => { this.categories = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.categories
	      );
		//get tag content
	   this.service.getTagContent().
			subscribe( response => { this.tags = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.tags
	      );
		//get recent comment content
	   this.service.getRecentCommentsContent().
			subscribe( response => { this.recentComments = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.recentComments
	      );
	}
}
