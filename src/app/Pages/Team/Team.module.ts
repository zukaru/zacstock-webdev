import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { WidgetsModule } from '../../Widgets/Widgets.module';
import { TeamComponent } from './Team/Team.component';
import { TeamDetailComponent } from './TeamDetail/TeamDetail.component';
import { TeamRoutes } from './Team.routing';
import { TemplateModule } from '../../Template/Template.module';

@NgModule({
	declarations: [
		TeamComponent, 
		TeamDetailComponent
	],
	imports: [
		CommonModule,
		TemplateModule,
		WidgetsModule,
		RouterModule.forChild(TeamRoutes)
	]
})

export class TeamModule { }
