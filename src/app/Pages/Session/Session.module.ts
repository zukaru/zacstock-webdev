import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SessionRoutes } from './Session.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './LogIn/LogIn.component';
import { SignupComponent } from './SignUp/SignUp.component';
import { Signup2Component } from './SignUp2/SignUp2.component';
import { MaintenanceComponent } from './Maintenance/Maintenance.component';
import { ComingsoonComponent } from './ComingSoon/ComingSoon.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';

@NgModule({
	declarations: [
		LoginComponent,
		SignupComponent, 
		Signup2Component, 
		MaintenanceComponent, 
		ComingsoonComponent, 
		PageNotFoundComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule, 
		FormsModule,
		RouterModule.forChild(SessionRoutes)
	]
})
export class SessionModule { }
