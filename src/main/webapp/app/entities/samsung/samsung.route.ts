import { DmDienThoaiSamsungComponent } from './samsung.component';
import { Routes } from '@angular/router';
import { Authority } from '../../shared/constants/authority.constants';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';

export const dmDienThoaiSamsungRoute: Routes = [
  {
    path: '',
    component: DmDienThoaiSamsungComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.dmDienThoai.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
