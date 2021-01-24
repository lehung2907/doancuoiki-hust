import { Authority } from '../../shared/constants/authority.constants';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { DmDienThoaiVsmartComponent } from './vsmart.component';
import { Routes } from '@angular/router';

export const dmDienThoaiVsmartRoute: Routes = [
  {
    path: '',
    component: DmDienThoaiVsmartComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.dmDienThoai.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
