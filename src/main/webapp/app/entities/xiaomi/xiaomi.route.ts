import { DmDienThoaiXiaomiComponent } from './xiaomi.component';
import { Authority } from '../../shared/constants/authority.constants';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { Routes } from '@angular/router';

export const xiaomiRoute: Routes = [
  {
    path: '',
    component: DmDienThoaiXiaomiComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.dmDienThoai.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
