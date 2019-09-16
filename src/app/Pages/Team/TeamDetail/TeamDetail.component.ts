import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';
import { Router,ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-team-detail',
	templateUrl: './TeamDetail.component.html',
	styleUrls: ['./TeamDetail.component.scss']
})
export class TeamDetailComponent implements OnInit {

	teamContent : any;
	id  			: any;

	constructor(public service : DropletService,
					private route  : ActivatedRoute,
               private router : Router) { }

	ngOnInit() {
		this.route.params.subscribe(res => {
			this.id = res.id;
			this.getTeamDetails();
      });
	}

	//getTeamDetails method is used to get the team detail.
	public getTeamDetails() {
      this.id = (this.id) ? this.id : 1;
      this.service.getTeamContent().
        subscribe(res => {this.getTeamDetailsResponse(res)});
   }

   //getTeamDetailsResponse method is used to get the response of team and then show the team details.
  	public getTeamDetailsResponse(response) {
      for(let data of response.team)
      {
         if(data.id == this.id) {
            this.teamContent = data;
            break;
         }
      }
   }
}
