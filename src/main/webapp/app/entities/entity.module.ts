import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'dm-dien-thoai',
        loadChildren: () => import('./dm-dien-thoai/dm-dien-thoai.module').then(m => m.SophiaDmDienThoaiModule),
      },
      {
        path: 'dm-lap-top',
        loadChildren: () => import('./dm-lap-top/dm-lap-top.module').then(m => m.SophiaDmLapTopModule),
      },
      {
        path: 'dm-san-pham',
        loadChildren: () => import('./dm-san-pham/dm-san-pham.module').then(m => m.SophiaDmSanPhamModule),
      },
      {
        path: 'dm-gio-hang',
        loadChildren: () => import('./dm-gio-hang/dm-gio-hang.module').then(m => m.SophiaDmGioHangModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class SophiaEntityModule {}
