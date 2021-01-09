import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IDmGioHang, DmGioHang } from 'app/shared/model/dm-gio-hang.model';
import { DmGioHangService } from './dm-gio-hang.service';
import { DmGioHangComponent } from './dm-gio-hang.component';
import { DmGioHangDetailComponent } from './dm-gio-hang-detail.component';
import { DmGioHangUpdateComponent } from './dm-gio-hang-update.component';

@Injectable({ providedIn: 'root' })
export class DmGioHangResolve implements Resolve<IDmGioHang> {
  constructor(private service: DmGioHangService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IDmGioHang> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((dmGioHang: HttpResponse<DmGioHang>) => {
          if (dmGioHang.body) {
            return of(dmGioHang.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new DmGioHang());
  }
}

export const dmGioHangRoute: Routes = [
  {
    path: '',
    component: DmGioHangComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.dmGioHang.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: DmGioHangDetailComponent,
    resolve: {
      dmGioHang: DmGioHangResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.dmGioHang.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: DmGioHangUpdateComponent,
    resolve: {
      dmGioHang: DmGioHangResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.dmGioHang.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: DmGioHangUpdateComponent,
    resolve: {
      dmGioHang: DmGioHangResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.dmGioHang.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
