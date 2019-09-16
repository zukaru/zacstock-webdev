import { Routes } from '@angular/router';

import { AboutComponent } from './About/About.component';
import { ProcessComponent } from './Process/Process.component';

export const AboutUsRoutes: Routes = [{
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
    },{
    path: '',
        children: [{
            path: 'about',
            component: AboutComponent
        }, {
            path: 'process',
            component: ProcessComponent
        }]
    }
];
