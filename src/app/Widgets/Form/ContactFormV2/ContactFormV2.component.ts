import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { DropletService } from '../../../Services/Droplet.service';

@Component({
  selector: 'app-contact-form-v2',
  templateUrl: './ContactFormV2.component.html',
  styleUrls: ['./ContactFormV2.component.scss']
})
export class ContactFormV2Component implements OnInit {

	public  form 	: FormGroup;
  emailPattern   : string    = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
  submitted = false;

  constructor(
    private fb : FormBuilder,
    private ds : DropletService
  ) { }

	ngOnInit() {}

	/* 	this.form = this.fb.group({
  			fname  			: ['', Validators.required],
  			lname  			: ['', Validators.required],
  			email 			: ['', [Validators.required,Validators.pattern(this.emailPattern)]] ,
  			message		   : ['', Validators.required],
  			phone       	: ['', Validators.required]
		});
  } */

  onSubmit(form: NgForm)  {
    if (form.invalid) {
      return;
    } else {
      this.ds.submitEmail(
        form.value.fname,
        form.value.lname,
        form.value.phone,
        form.value.email,
        form.value.message,
        form.value.company
      );
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
        form.resetForm();
      }, 7000);
    }
  }

}
