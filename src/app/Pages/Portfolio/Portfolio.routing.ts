import { Routes } from '@angular/router';
import { PortfolioGridComponent } from './PortfolioGrid/PortfolioGrid.component';
import { PortfolioDetailComponent } from './PortfolioDetail/PortfolioDetail.component';

export const PortfolioRoutes: Routes = [{
  path: '',
  component: PortfolioGridComponent,
}
];
