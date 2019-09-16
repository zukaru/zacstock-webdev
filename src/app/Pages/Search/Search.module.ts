import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchRoutes } from './Search.routing';
import { SearchComponent } from './Search/Search.component';
import { WidgetsModule } from '../../Widgets/Widgets.module';

@NgModule({
	declarations: [SearchComponent],
	imports: [
		CommonModule,
		WidgetsModule,
		RouterModule.forChild(SearchRoutes)
	]
})
export class SearchModule { }
