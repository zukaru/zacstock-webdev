import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './FooterMenu.component.html',
  styleUrls: ['./FooterMenu.component.scss']
})
export class FooterMenuComponent implements OnInit {

	@Input() menu : any;
	
	constructor() { }

	ngOnInit() {
	}

}
