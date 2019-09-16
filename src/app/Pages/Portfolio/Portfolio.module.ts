import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PortfolioGridComponent } from './PortfolioGrid/PortfolioGrid.component';
import { PortfolioDetailComponent } from './PortfolioDetail/PortfolioDetail.component';
import { PortfolioRoutes } from './Portfolio.routing';
import { WidgetsModule } from '../../Widgets/Widgets.module';
import { TemplateModule } from '../../Template/Template.module';

@NgModule({
	declarations: [
		PortfolioGridComponent, 
		PortfolioDetailComponent
	],
	imports: [
		CommonModule,
		WidgetsModule,
		TemplateModule,
		RouterModule.forChild(PortfolioRoutes)
	]
})
export class PortfolioModule { }
