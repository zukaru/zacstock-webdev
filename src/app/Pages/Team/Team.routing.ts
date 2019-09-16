import { Routes } from '@angular/router';
import { TeamComponent } from './Team/Team.component';
import { TeamDetailComponent } from './TeamDetail/TeamDetail.component';

export const TeamRoutes: Routes = [{
    path: '',
    redirectTo: 'team',
    pathMatch: 'full'
    },{
    path: '',
        children: [{
            path: 'team',
            component: TeamComponent
        }, {
            path: 'team-detail/:id',
            component: TeamDetailComponent
        }, {
            path: 'team-detail',
            component: TeamDetailComponent
        }]
    }
];
