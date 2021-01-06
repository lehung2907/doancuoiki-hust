import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SophiaSharedModule } from 'app/shared/shared.module';
import { DmDienThoaiComponent } from './dm-dien-thoai.component';
import { DmDienThoaiDetailComponent } from './dm-dien-thoai-detail.component';
import { DmDienThoaiUpdateComponent } from './dm-dien-thoai-update.component';
import { DmDienThoaiDeleteDialogComponent } from './dm-dien-thoai-delete-dialog.component';
import { dmDienThoaiRoute } from './dm-dien-thoai.route';

@NgModule({
  imports: [SophiaSharedModule, RouterModule.forChild(dmDienThoaiRoute)],
  declarations: [DmDienThoaiComponent, DmDienThoaiDetailComponent, DmDienThoaiUpdateComponent, DmDienThoaiDeleteDialogComponent],
  entryComponents: [DmDienThoaiDeleteDialogComponent],
})
export class SophiaDmDienThoaiModule {}
