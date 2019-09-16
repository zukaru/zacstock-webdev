import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-maintenance',
  templateUrl: './Maintenance.component.html',
  styleUrls: ['./Maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
	
	public  form 	: FormGroup;
	emailPattern   : string    = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

	constructor(private fb : FormBuilder) { }

	ngOnInit() {
		this.form = this.fb.group({  
  			email : ['', [Validators.required,Validators.pattern(this.emailPattern)]] ,
		});
	}
}
