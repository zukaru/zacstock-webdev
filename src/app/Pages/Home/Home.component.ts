import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../Services/Droplet.service';

@Component({
	selector: 'app-home',
	templateUrl: './Home.component.html',
	styleUrls: ['./Home.component.scss']
})

export class HomeComponent implements OnInit {

	gridOverlay  		: any;
	serviceItems 		: any;
	testimonialData	: any;
	counterContent    : any;

	/**
	  * Recent Work Content Heading
	  */
	recentWorkHeading : any = {
		title : "Recent Work",
		content : "Here's what we've been working on. If you like something we've done, we'd love to hear about it. Contact us today!"
	}

	/**
	  * Explore Studio content
	  */
	exploreStudio : any = [
		"../../../assets/images/coding-books-table-coffee-overhead.jpg",
		"../../../assets/images/rustic-table-salt-lamp-tablet.jpg",
		"../../../assets/images/minifiedJquery.jpg"
	]

	/**
	  * Client Says Content Heading
	  */
	clientSaysHeading : any = {
		title : "What Our Clients Think",
		content : "See what your neigbors have to say about their experience finding simple solutions to complex problems."
	}

	/**
	  * Content of Contact section
	  */
	contactContent : any = {
		title : "Become an ally of Reliable and Experienced Agency",
		content : "Enter your details & we'll be in touch to discuss your project",
		email : "support@theironnetwork.org",
		contactNumber : "+01 2345 678 910",
		contactTo : "+016272627273" ,
		image : "https://via.placeholder.com/700x700/"
	}

	constructor(public service : DropletService) { }

	ngOnInit() {

		//blog overlay content
		this.service.getBlogContent().
			subscribe( response => { this.gridOverlay = response },
	                 err 	  =>  console.log(err),
	                 ()       =>  this.gridOverlay
	           	);

		//service content
		this.service.getServiceContent().
			subscribe( response => {this.serviceItems = response },
					   err      => console.log(err),
					   ()       => this.serviceItems
					);

		//counter content
		this.service.getCounterContent().
			subscribe( response => {this.counterContent = response },
					   err      => console.log(err),
					   ()       => this.counterContent
					);

		//testimonial content
		this.service.getTestimonialContent().
			subscribe( response => {this.testimonialData = response },
					   err      => console.log(err),
					   ()       => this.testimonialData
					);
	}
}
