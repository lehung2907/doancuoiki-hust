import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { xiaomiRoute } from './xiaomi.route';
import { SophiaSharedModule } from '../../shared/shared.module';
import { DmDienThoaiXiaomiComponent } from './xiaomi.component';

@NgModule({
  imports: [SophiaSharedModule, RouterModule.forChild(xiaomiRoute)],
  declarations: [DmDienThoaiXiaomiComponent],
  entryComponents: [],
})
export class SophiaDmDienThoaiXiaomiModule {}
