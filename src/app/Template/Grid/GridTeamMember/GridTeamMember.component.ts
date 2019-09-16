import { Component, OnInit, Input } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';
import { Router} from '@angular/router';

@Component({
	selector: 'app-grid-team-member',
	templateUrl: './GridTeamMember.component.html',
	styleUrls: ['./GridTeamMember.component.scss']
})

export class GridTeamMemberComponent implements OnInit {

	@Input() teamContent : any;

	constructor(private service : DropletService, 
					private router : Router) { }

	ngOnInit() {
	}
	
	/**
	  * getTeamContent method is used to route to team member detail page. 
	  * Also data from the clicked team member will be transferred to team member detail page.
	  */
	getTeamContent(content) {
		this.service.teamDetailContent = content;
		this.router.navigate(['/team/team-detail',content.id]);
	}
}
