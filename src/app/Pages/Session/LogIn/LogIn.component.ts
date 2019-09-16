import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './LogIn.component.html',
	styleUrls: ['./LogIn.component.scss']
})

export class LoginComponent implements OnInit {

	public  form 	: FormGroup;
	emailPattern   : string    = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

	constructor(private fb : FormBuilder,
					private router : Router) { }

	ngOnInit() {
		this.form = this.fb.group({
  			name  			: ['', Validators.required],
  			email 			: ['', [Validators.required,Validators.pattern(this.emailPattern)]] ,
  			password       : ['', Validators.required]
		});
	}

	//login method is used when form field is valid then router will be navigate to the home page.
	logIn() {
		if(this.form.valid){
			this.router.navigate(['/']);
		}else{
			for(let i in this.form.controls)
				{
					this.form.controls[i].markAsTouched();
				}
		}
	}
}
