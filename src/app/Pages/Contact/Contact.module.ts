import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactRoutes } from './Contact.routing';
import { ContactComponent } from './Contact/Contact.component';
import { WidgetsModule } from '../../Widgets/Widgets.module';

@NgModule({
	declarations: [
    ContactComponent
	],

	imports: [
		CommonModule,
		WidgetsModule,
		RouterModule.forChild(ContactRoutes)
	]
})
export class ContactModule { }
