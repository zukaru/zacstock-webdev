import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
	selector: 'app-process',
	templateUrl: './Process.component.html',
	styleUrls: ['./Process.component.scss']
})
export class ProcessComponent implements OnInit {

	processContent : any;

	constructor(private service : DropletService) { }

	ngOnInit() {
		//process content
		this.service.getProcessContent().
			subscribe( response => { this.processContent = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.processContent
	           	);
	}

}
