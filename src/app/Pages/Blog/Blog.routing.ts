import { Routes } from '@angular/router';
import { BlogGridComponent } from './BlogGrid/BlogGrid.component';
import { BlogListComponent } from './BlogList/BlogList.component';
import { BlogDetailComponent } from './BlogDetail/BlogDetail.component';

export const BlogRoutes: Routes = [{
    path: '',
    redirectTo: 'blog-grid',
    pathMatch: 'full'
    },{
    path: '',
        children: [{
            path: 'blog-grid',
            component: BlogGridComponent
        }, {
            path: 'blog-list',
            component: BlogListComponent
        }, {
            path: 'blog-detail/:id',
            component: BlogDetailComponent
        },{
            path: 'blog-detail',
            component: BlogDetailComponent
        }]
    }
];
