import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WidgetsModule } from '../../Widgets/Widgets.module';
import { TemplateModule } from '../../Template/Template.module';

import { ServicesComponent } from './Services/Services.component';
import { ServicesRoutes } from './Services.routing';


@NgModule({
	declarations: [ServicesComponent],
	imports: [
		CommonModule,
		WidgetsModule,
		TemplateModule,
		RouterModule.forChild(ServicesRoutes)
	]
})

export class ServicesModule { }
