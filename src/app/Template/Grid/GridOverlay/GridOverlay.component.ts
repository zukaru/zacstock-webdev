import { Component, OnInit, Input } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-overlay',
  templateUrl: './GridOverlay.component.html',
  styleUrls: ['./GridOverlay.component.scss']
})

export class GridOverlayComponent implements OnInit {

	@Input() gridOverlay : any;

	constructor(public service : DropletService,
				public router : Router) { }

	ngOnInit() {
	}	

	/**
	  * gridOverlayContent method is used to route to blog detail page. 
	  * Also data from the clicked grid item will be transferred to blog detail page.
	  */
	gridOverlayContent(content) {	
		this.service.blogDetailContent = content;
		this.router.navigate(['/blog/blog-detail',content.id]);
	}

}
