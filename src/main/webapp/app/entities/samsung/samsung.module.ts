import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DmDienThoaiSamsungComponent } from './samsung.component';
import { SophiaSharedModule } from '../../shared/shared.module';
import { dmDienThoaiSamsungRoute } from './samsung.route';

@NgModule({
  imports: [SophiaSharedModule, RouterModule.forChild(dmDienThoaiSamsungRoute)],
  declarations: [DmDienThoaiSamsungComponent],
  entryComponents: [],
})
export class SophiaDmDienThoaiSamsungModule {}
