import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IHoaDon, HoaDon } from 'app/shared/model/hoa-don.model';
import { HoaDonService } from './hoa-don.service';
import { HoaDonComponent } from './hoa-don.component';
import { HoaDonDetailComponent } from './hoa-don-detail.component';
import { HoaDonUpdateComponent } from './hoa-don-update.component';

@Injectable({ providedIn: 'root' })
export class HoaDonResolve implements Resolve<IHoaDon> {
  constructor(private service: HoaDonService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IHoaDon> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((hoaDon: HttpResponse<HoaDon>) => {
          if (hoaDon.body) {
            return of(hoaDon.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new HoaDon());
  }
}

export const hoaDonRoute: Routes = [
  {
    path: '',
    component: HoaDonComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.hoaDon.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: HoaDonDetailComponent,
    resolve: {
      hoaDon: HoaDonResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.hoaDon.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: HoaDonUpdateComponent,
    resolve: {
      hoaDon: HoaDonResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.hoaDon.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: HoaDonUpdateComponent,
    resolve: {
      hoaDon: HoaDonResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'sophiaApp.hoaDon.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
