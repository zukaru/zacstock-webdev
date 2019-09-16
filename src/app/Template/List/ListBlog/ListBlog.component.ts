import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
	selector: 'app-list-blog',
	templateUrl: './ListBlog.component.html',
	styleUrls: ['./ListBlog.component.scss']
})
export class ListBlogComponent implements OnInit {
	
	@Input() blogList : any;

	constructor(public service : DropletService,
					public router : Router) { }

	ngOnInit() {
	}

	/**
	  * listBlogContent method is used to route to blog detail page. 
	  * Also data from the clicked grid item will be transferred to blog detail page.
	  */
	listBlogContent(content) {	
		this.service.blogDetailContent = content;
		this.router.navigate(['/blog/blog-detail',content.id]);
	}

}
