import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-content-v1',
  templateUrl: './ContactContentV1.component.html',
  styleUrls: ['./ContactContentV1.component.scss']
})
export class ContactContentComponent implements OnInit {
	
	@Input() contactContent : any; 

	constructor() { }

	ngOnInit() {
	}

}
