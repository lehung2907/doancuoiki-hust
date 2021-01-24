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
        path: 'dm-dien-thoai-oppo',
        loadChildren: () => import('./oppo/oppo.module').then(m => m.SophiaOppoModule),
      },
      {
        path: 'dm-dien-thoai-samsung',
        loadChildren: () => import('./samsung/samsung.module').then(m => m.SophiaDmDienThoaiSamsungModule),
      },
      {
        path: 'dm-dien-thoai-khac',
        loadChildren: () => import('./spKhac/spKhac.module').then(m => m.SophiaDmDienThoaiKhacModule),
      },
      {
        path: 'dm-dien-thoai-vsmart',
        loadChildren: () => import('./vsmart/vsmart.module').then(m => m.SophiaDmDienThoaiVsmartModule),
      },
      {
        path: 'dm-dien-thoai-xiaomi',
        loadChildren: () => import('./xiaomi/xiaomi.module').then(m => m.SophiaDmDienThoaiXiaomiModule),
      },
      {
        path: 'dm-san-pham',
        loadChildren: () => import('./dm-san-pham/dm-san-pham.module').then(m => m.SophiaDmSanPhamModule),
      },
      {
        path: 'dm-gio-hang',
        loadChildren: () => import('./dm-gio-hang/dm-gio-hang.module').then(m => m.SophiaDmGioHangModule),
      },
      {
        path: 'hoa-don',
        loadChildren: () => import('./hoa-don/hoa-don.module').then(m => m.SophiaHoaDonModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class SophiaEntityModule {}
