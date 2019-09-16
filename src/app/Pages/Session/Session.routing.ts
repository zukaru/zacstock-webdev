import { Routes } from '@angular/router';

import { SignupComponent } from './SignUp/SignUp.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';

export const SessionRoutes: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    },{
    path: '',
        children: [ {
            path: 'signup',
            component: SignupComponent
        }, {
            path: 'page-not-found',
            component: PageNotFoundComponent
        }]
    }
];
