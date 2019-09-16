import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-comments',
  templateUrl: './RecentComments.component.html',
  styleUrls: ['./RecentComments.component.scss']
})
export class RecentCommentsComponent implements OnInit {
	
	@Input() recentComments : any;

	constructor() { }

	ngOnInit() {
	}

}
