import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-founder',
  templateUrl: './TeamFounder.component.html',
  styleUrls: ['./TeamFounder.component.scss']
})
export class TeamFounderComponent implements OnInit {

	@Input() teamFounder : any;

	constructor() { }

	ngOnInit() {
	}

}
