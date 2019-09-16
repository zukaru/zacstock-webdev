import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WidgetsModule } from '../../Widgets/Widgets.module';
import { PricingComponent } from './Pricing/Pricing.component';
import { PricingRoutes } from './Pricing.routing';

@NgModule({
	declarations: [PricingComponent],

	imports: [
		CommonModule,
		WidgetsModule,
		RouterModule.forChild(PricingRoutes)
	]

})
export class PricingModule { }
