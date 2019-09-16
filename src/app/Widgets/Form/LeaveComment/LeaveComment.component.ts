import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-leavecomment',
  templateUrl: './LeaveComment.component.html',
  styleUrls: ['./LeaveComment.component.scss']
})
export class LeavecommentComponent implements OnInit {

	public  form 	: FormGroup;
	emailPattern   : string    = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

	constructor(private fb : FormBuilder) { }

	ngOnInit() {

		this.form = this.fb.group({  
  			fname  			: ['', Validators.required],
  			lname  			: ['', Validators.required],
  			email 			: ['', [Validators.required,Validators.pattern(this.emailPattern)]] ,
  			message 		   : ['', Validators.required]
		});

	}

}
