import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';


@Component({
	selector: 'app-contact',
	templateUrl: './Contact.component.html',
	styleUrls: ['./Contact.component.scss']
})

export class ContactComponent implements OnInit {


	constructor(public router: Router) { }

	ngOnInit() {
	}

}
