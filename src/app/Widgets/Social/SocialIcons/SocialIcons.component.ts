import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './SocialIcons.component.html',
  styleUrls: ['./SocialIcons.component.scss']
})
export class SocialIconsComponent implements OnInit {

	@Input() socialIcons : any;
	
	constructor() { }

	ngOnInit() {
	}

}
