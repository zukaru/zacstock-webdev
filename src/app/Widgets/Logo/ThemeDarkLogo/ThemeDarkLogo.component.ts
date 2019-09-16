import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-theme-dark-logo',
  templateUrl: './ThemeDarkLogo.component.html',
  styleUrls: ['./ThemeDarkLogo.component.scss']
})
export class ThemeDarkLogoComponent implements OnInit {

	@Input() logoClass : any;

	constructor() { }

	ngOnInit() {
	}

}
