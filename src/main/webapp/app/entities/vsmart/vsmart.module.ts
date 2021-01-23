import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DmDienThoaiVsmartComponent } from './vsmart.component';
import { dmDienThoaiVsmartRoute } from './vsmart.route';
import { SophiaSharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [SophiaSharedModule, RouterModule.forChild(dmDienThoaiVsmartRoute)],
  declarations: [DmDienThoaiVsmartComponent],
  entryComponents: [],
})
export class SophiaDmDienThoaiVsmartModule {}
