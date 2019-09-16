import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WidgetsModule } from '../../Widgets/Widgets.module';
import { FaqRoutes } from './Faq.routing';
import { FaqComponent } from './Faq/Faq.component';

@NgModule({
	declarations: [FaqComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(FaqRoutes),
		WidgetsModule
	]
})
export class FaqModule { }
