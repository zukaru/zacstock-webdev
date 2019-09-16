import { Component, OnInit, Input } from '@angular/core';
import { DropletService } from '../../Services/Droplet.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-recent-work',
	templateUrl: './RecentWork.component.html',
	styleUrls: ['./RecentWork.component.scss']
})

export class RecentWorkComponent implements OnInit {

	@Input() recentWorkHeading		: any;
	portfolioContent 					: any;
	showPortfolioData 			   : number = 3;

	constructor(private service : DropletService) { }

	ngOnInit() {
		//portfolio content
		this.service.getPortfolioContent().
			subscribe( response => { this.portfolioContent = response},
						  err 	  => console.log(err),
						  ()       => this.portfolioContent
			)
	}

}
