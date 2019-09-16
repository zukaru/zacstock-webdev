import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItemComponent } from './Grid/ServiceItem/ServiceItem.component';
import { GridOverlayComponent } from './Grid/GridOverlay/GridOverlay.component';
import { GridBlogComponent } from './Grid/GridBlog/GridBlog.component';
import { ListBlogComponent } from './List/ListBlog/ListBlog.component';
import { GridTeamMemberComponent } from './Grid/GridTeamMember/GridTeamMember.component';
import { PortfolioGridComponent } from './Grid/PortfolioGrid/PortfolioGrid.component';

@NgModule({
	declarations: [
		ServiceItemComponent,
		GridOverlayComponent,
		GridBlogComponent,
		ListBlogComponent,
		GridTeamMemberComponent,
		PortfolioGridComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		ServiceItemComponent,
		GridOverlayComponent,
		GridBlogComponent,
		ListBlogComponent,
		GridTeamMemberComponent,
		PortfolioGridComponent
	]
})
export class TemplateModule { }
