import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
	selector: 'app-post-list',
	templateUrl: './PostList.component.html',
	styleUrls: ['./PostList.component.scss']
})

export class PostListComponent implements OnInit {

	@Input() postList : any;
	@Output() blogDetail = new EventEmitter();

	constructor(public service : DropletService,
					public router : Router) { }

	ngOnInit() {
	}
	
	/**
	  * listBlogContent method is used to route to blog detail page. 
	  * Also data from the clicked grid item will be transferred to blog detail page.
	  */
	listBlogContent(content) {	
		if(this.router.url == '/blog/blog-list') {
			this.router.navigate(['/blog/blog-detail',content.id]);
			this.service.blogDetailContent = content;
		}else{
			this.blogDetail.emit(content);
		}
	}

}
