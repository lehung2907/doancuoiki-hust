import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SophiaSharedModule } from 'app/shared/shared.module';
import { DmDienThoaiComponent } from './dm-dien-thoai.component';
import { dmDienThoaiRoute } from './dm-dien-thoai.route';

@NgModule({
  imports: [SophiaSharedModule, RouterModule.forChild(dmDienThoaiRoute)],
  declarations: [DmDienThoaiComponent],
  entryComponents: [],
})
export class SophiaDmDienThoaiModule {}
