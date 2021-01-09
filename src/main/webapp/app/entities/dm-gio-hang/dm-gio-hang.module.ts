import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SophiaSharedModule } from 'app/shared/shared.module';
import { DmGioHangComponent } from './dm-gio-hang.component';
import { DmGioHangDetailComponent } from './dm-gio-hang-detail.component';
import { DmGioHangUpdateComponent } from './dm-gio-hang-update.component';
import { DmGioHangDeleteDialogComponent } from './dm-gio-hang-delete-dialog.component';
import { dmGioHangRoute } from './dm-gio-hang.route';

@NgModule({
  imports: [SophiaSharedModule, RouterModule.forChild(dmGioHangRoute)],
  declarations: [DmGioHangComponent, DmGioHangDetailComponent, DmGioHangUpdateComponent, DmGioHangDeleteDialogComponent],
  entryComponents: [DmGioHangDeleteDialogComponent],
})
export class SophiaDmGioHangModule {}
