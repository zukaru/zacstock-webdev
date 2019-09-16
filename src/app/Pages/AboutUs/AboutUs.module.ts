import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { AboutComponent } from './About/About.component';
import { ProcessComponent } from './Process/Process.component';
import { WidgetsModule } from '../../Widgets/Widgets.module';
import { AboutUsRoutes } from './AboutUs.routing';

@NgModule({
	declarations: [
		AboutComponent,
		ProcessComponent
	],
	imports: [
		CommonModule,
		WidgetsModule,
		RouterModule.forChild(AboutUsRoutes)
	]
})
export class AboutUsModule { }
