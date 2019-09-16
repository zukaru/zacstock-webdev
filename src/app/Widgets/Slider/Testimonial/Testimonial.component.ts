import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './Testimonial.component.html',
  styleUrls: ['./Testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
	
	@Input() testimonialContent : any;
	@Input() testimonialConfig : any;

	constructor() { }

	ngOnInit() {
	}

}
