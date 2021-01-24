import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SophiaSharedModule } from '../../shared/shared.module';
import { DmDienThoaiKhacComponent } from './spKhac.component';
import { dmDienThoaiKhacRoute } from './spKhac.route';

@NgModule({
  imports: [SophiaSharedModule, RouterModule.forChild(dmDienThoaiKhacRoute)],
  declarations: [DmDienThoaiKhacComponent],
  entryComponents: [],
})
export class SophiaDmDienThoaiKhacModule {}
