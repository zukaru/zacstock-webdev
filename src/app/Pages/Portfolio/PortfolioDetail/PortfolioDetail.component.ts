import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';
import { Router,ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-portfolio-detail',
	templateUrl: './PortfolioDetail.component.html',
	styleUrls: ['./PortfolioDetail.component.scss']
})

export class PortfolioDetailComponent implements OnInit {

	portfolioContent 		 : any;
	otherPortfolioContent : any;
	portfolioId      		 : any;
	type 						 : any;

	constructor(private service : DropletService,
					private router  : Router,
					private route	 : ActivatedRoute) {
	}

	ngOnInit() {
		this.service.getPortfolioContent().
			subscribe( response => { this.otherPortfolioContent = response},
						  err      => console.log(err),
						  ()       => this.otherPortfolioContent
			)

		this.route.params.subscribe(res => {
			this.portfolioId = res.id;
         this.type = res.type;
         if(this.service.portfolioContent){
         	this.portfolioContent = this.service.portfolioContent;
         }else{
         	this.getPortfolioDetails();
         }
      });
	}

	//getPortfolioByCategory method is used to get the category of portfolio.
	getPortfolioByCategory (type) {
		let portfolioContentByCategory = [];
		if(this.otherPortfolioContent && this.otherPortfolioContent.length > 0){
			for(let content of this.otherPortfolioContent){
				if(content.type == type){
					portfolioContentByCategory.push(content)
				}
			}
			return portfolioContentByCategory;
		}
	}

	//portfolioGridContent method is used to show the detail of portfolio grid.
	portfolioGridContent(content) {
    this.service.portfolioContent = content;
    this.router.navigate(['/portfolio',content.category,content.id]);
	}

	//getPortfolioDetails method is used to get the portfolio detail.
	public getPortfolioDetails() {
      this.portfolioId = (this.portfolioId) ? this.portfolioId : 1;
      this.type = (this.type) ? this.type : 'Business';
      this.service.getPortfolioContent().
      	subscribe(res => {this.getPortfolioDetailsResponse(res)});
   }

   //getPortfolioDetailsResponse method is used to according to the response portfolio detail show.
   public getPortfolioDetailsResponse(response) {
      for(let data of response)
      {
         if(data.id == this.portfolioId && data.category == this.type) {
            this.portfolioContent = data;
            break;
         }
      }
	}
}
