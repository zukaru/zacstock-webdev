import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup2',
	templateUrl: './SignUp2.component.html',
	styleUrls: ['./SignUp2.component.scss']
})

export class Signup2Component implements OnInit {

  	public  form 	: FormGroup;
	emailPattern   : string    = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

	constructor(private fb : FormBuilder,
					private router : Router) { }

	ngOnInit() {
		this.form = this.fb.group({  
  			name  			 : ['', Validators.required],
  			email 			 : ['', [Validators.required,Validators.pattern(this.emailPattern)]],
  			newPassword		 : ["",[Validators.required,Validators.minLength(6)]],
			confirmPassword : ["",[Validators.required,Validators.minLength(6)]]
		},{
      	validator: this.MatchPassword // your validation method
    	});
	}

	/*
	 * Match Password Custom validation
	 */
	MatchPassword(AC: AbstractControl) {
      let password = AC.get('newPassword').value; // to get value in input tag
      let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
      if(password != confirmPassword) {
      	AC.get('confirmPassword').setErrors( {MatchPassword: true} )
      } else {
         return null
      }
	}
	
	//signUp method is used when form field is valid then router will be navigate to the home page. 
	signUp(){
		if(this.form.valid){
			this.router.navigate(['/home']);
		}else{
			for(let i in this.form.controls)
				{
					this.form.controls[i].markAsTouched();
				}
		}
	}

}
