import { Routes } from '@angular/router';
import { Authority } from '../../shared/constants/authority.constants';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { OppoComponent } from './oppo.component';

export const oppoRoute: Routes = [
  {
    path: '',
    component: OppoComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.dmDienThoai.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
