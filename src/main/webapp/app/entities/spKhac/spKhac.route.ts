import { DmDienThoaiKhacComponent } from './spKhac.component';
import { Authority } from '../../shared/constants/authority.constants';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { Routes } from '@angular/router';

export const dmDienThoaiKhacRoute: Routes = [
  {
    path: '',
    component: DmDienThoaiKhacComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.dmDienThoai.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
