import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-theme-light-logo',
  templateUrl: './ThemeLightLogo.component.html',
  styleUrls: ['./ThemeLightLogo.component.scss']
})
export class ThemeLightLogoComponent implements OnInit {
	
	@Input() logoClass : any;

	constructor() { }

	ngOnInit() {
	}

}
