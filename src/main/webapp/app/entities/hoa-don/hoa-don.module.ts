import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SophiaSharedModule } from 'app/shared/shared.module';
import { HoaDonComponent } from './hoa-don.component';
import { HoaDonDetailComponent } from './hoa-don-detail.component';
import { HoaDonUpdateComponent } from './hoa-don-update.component';
import { HoaDonDeleteDialogComponent } from './hoa-don-delete-dialog.component';
import { hoaDonRoute } from './hoa-don.route';

@NgModule({
  imports: [SophiaSharedModule, RouterModule.forChild(hoaDonRoute)],
  declarations: [HoaDonComponent, HoaDonDetailComponent, HoaDonUpdateComponent, HoaDonDeleteDialogComponent],
  entryComponents: [HoaDonDeleteDialogComponent],
})
export class SophiaHoaDonModule {}
