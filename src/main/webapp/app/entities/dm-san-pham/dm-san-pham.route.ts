import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IDmSanPham, DmSanPham } from 'app/shared/model/dm-san-pham.model';
import { DmSanPhamService } from './dm-san-pham.service';
import { DmSanPhamComponent } from './dm-san-pham.component';
import { DmSanPhamDetailComponent } from './dm-san-pham-detail.component';
import { DmSanPhamUpdateComponent } from './dm-san-pham-update.component';

@Injectable({ providedIn: 'root' })
export class DmSanPhamResolve implements Resolve<IDmSanPham> {
  constructor(private service: DmSanPhamService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IDmSanPham> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((dmSanPham: HttpResponse<DmSanPham>) => {
          if (dmSanPham.body) {
            return of(dmSanPham.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new DmSanPham());
  }
}

export const dmSanPhamRoute: Routes = [
  {
    path: '',
    component: DmSanPhamComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.dmSanPham.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: DmSanPhamDetailComponent,
    resolve: {
      dmSanPham: DmSanPhamResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.dmSanPham.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: DmSanPhamUpdateComponent,
    resolve: {
      dmSanPham: DmSanPhamResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.dmSanPham.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: DmSanPhamUpdateComponent,
    resolve: {
      dmSanPham: DmSanPhamResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.dmSanPham.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
