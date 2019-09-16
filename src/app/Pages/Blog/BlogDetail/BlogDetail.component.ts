import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';
import { Router,ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './BlogDetail.component.html',
  styleUrls: ['./BlogDetail.component.scss']
})
export class BlogDetailComponent implements OnInit {
		
	gridItemDetails 	: any;
	socialIcons 	 	: any;
	postList			 	: any;
	categories 		 	: any;
	tags 					: any;
	recentComments 	: any;
	aboutAuthorContent: any;
	blogId      		: any;

	constructor(public service : DropletService,
					private route  : ActivatedRoute,
               private router : Router) { }

	ngOnInit() {

		this.route.params.subscribe(res => {
			this.blogId = res.id;
			this.getBlodDetails();
      });

		//social icons content
		this.service.getSocialIconsContent().
			subscribe(response => {this.socialIcons = response},
						 err      => console.log(err),
						 ()       => this.socialIcons
			);
		//get post list content
		this.service.getBlogContent().
			subscribe( response => { this.postList = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.postList
	        );
		//get category content
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
		//get recent comments content
	   this.service.getRecentCommentsContent().
	   	subscribe( response  => { this.recentComments = response },
	   				  err       => console.log(err),
	   				  ()        => this.recentComments
	      );
	   //get about author content
	   this.service.getAboutAuthorContent().
		   	subscribe( response  => { this.aboutAuthorContent = response },
		   				  err       => console.log(err),
		   				  ()        => this.aboutAuthorContent
		      );
	}

	//postDetailContent method is used to get the detail content of post list.
	postDetailContent(event){
		this.service.blogDetailContent = event;
		this.router.navigate(['/blog/blog-detail',event.id]);
	}

	//getBlodDetails method is used to get the blog detail.
	public getBlodDetails() {
      this.blogId = (this.blogId) ? this.blogId : 1;
      this.service.getBlogContent().
        subscribe(res => {this.getBlogDetailsResponse(res)});
   }

   //getBlogDetailsResponse method is used to get the response of blog and then show the blog item details.
   public getBlogDetailsResponse(response) {
      for(let data of response)
      {
         if(data.id == this.blogId) {
            this.gridItemDetails = data;
            break;
         }
      }
   }
}
