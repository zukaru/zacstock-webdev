import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
	selector: 'app-faq',
	templateUrl: './Faq.component.html',
	styleUrls: ['./Faq.component.scss']
})

export class FaqComponent implements OnInit {

	faqContent : any;

	constructor(private service : DropletService) { }

	ngOnInit() {
		//get faq content
		this.service.getFaqContent().
			subscribe( res => { this.faqContent = res},
					   err => console.log(err),
					   ()  => this.faqContent
			);
	}

}
