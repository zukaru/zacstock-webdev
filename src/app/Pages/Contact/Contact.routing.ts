import { Routes } from '@angular/router';
import { ContactComponent } from './Contact/Contact.component';
import { DeactivateGuardService } from '../../deactivate-guard.service';

export const ContactRoutes: Routes = [{
		path: '',
		component: ContactComponent
  },
  {
    path: 'project-requirements',
		component: ContactComponent
	}
];
