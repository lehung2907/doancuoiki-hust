import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SophiaSharedModule } from 'app/shared/shared.module';
import { DmSanPhamComponent } from './dm-san-pham.component';
import { DmSanPhamDetailComponent } from './dm-san-pham-detail.component';
import { DmSanPhamUpdateComponent } from './dm-san-pham-update.component';
import { DmSanPhamDeleteDialogComponent } from './dm-san-pham-delete-dialog.component';
import { dmSanPhamRoute } from './dm-san-pham.route';

@NgModule({
  imports: [SophiaSharedModule, RouterModule.forChild(dmSanPhamRoute)],
  declarations: [DmSanPhamComponent, DmSanPhamDetailComponent, DmSanPhamUpdateComponent, DmSanPhamDeleteDialogComponent],
  entryComponents: [DmSanPhamDeleteDialogComponent],
})
export class SophiaDmSanPhamModule {}
