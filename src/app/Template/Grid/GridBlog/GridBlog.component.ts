import { Component, OnInit, Input } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-blog',
  templateUrl: './GridBlog.component.html',
  styleUrls: ['./GridBlog.component.scss']
})
export class GridBlogComponent implements OnInit {

 	@Input() gridBlog : any;

	constructor(public service : DropletService,
					public router : Router) { }

	ngOnInit() {
		
	}

	/**
	  * gridBlogContent method is used to route to blog detail page. 
	  * Also data from the clicked grid item will be transferred to blog detail page.
	  */
	gridBlogContent(content) {	
		this.service.blogDetailContent = content;
		this.router.navigate(['/blog/blog-detail',content.id]);
	}

}
