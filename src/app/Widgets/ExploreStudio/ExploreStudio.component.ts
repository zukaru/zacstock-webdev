import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-stdio',
  templateUrl: './ExploreStudio.component.html',
  styleUrls: ['./ExploreStudio.component.scss']
})
export class ExploreStdioComponent implements OnInit {

	@Input() exploreStudio : any;

	constructor() { }

	ngOnInit() {
	}
}
