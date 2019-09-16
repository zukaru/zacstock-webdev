import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-content',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.scss']
})
export class ContactComponent implements OnInit {

	@Input() contactContent : any; 

	constructor() { }

	ngOnInit() {
	}

}
