import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BlogGridComponent } from './BlogGrid/BlogGrid.component';
import { BlogListComponent } from './BlogList/BlogList.component';
import { BlogDetailComponent } from './BlogDetail/BlogDetail.component';
import { TemplateModule } from '../../Template/Template.module';
import { WidgetsModule } from '../../Widgets/Widgets.module';

import { BlogRoutes } from './Blog.routing';

@NgModule({
	declarations: [
		BlogGridComponent, 
		BlogListComponent, 
		BlogDetailComponent
	],
	imports: [
		CommonModule,
		TemplateModule,
		WidgetsModule,
		RouterModule.forChild(BlogRoutes)
	]
})
export class BlogModule { }
