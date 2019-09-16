import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
	selector: 'app-contact-form',
	templateUrl: './ContactForm.component.html',
	styleUrls: ['./ContactForm.component.scss']
})

export class ContactFormComponent implements OnInit {

	public  form 	: FormGroup;
	emailPattern   : string    = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

	constructor(private fb : FormBuilder) { }

	ngOnInit() {

		this.form = this.fb.group({  
  			name  			: ['', Validators.required],
  			email 			: ['', [Validators.required,Validators.pattern(this.emailPattern)]] ,
  			contactNumber  : ['', Validators.required],
  			selectGroup 	: ['', Validators.required] 
		});
	}

}
