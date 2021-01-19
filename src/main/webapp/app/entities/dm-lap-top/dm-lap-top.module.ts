import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SophiaSharedModule } from 'app/shared/shared.module';
import { DmLapTopComponent } from './dm-lap-top.component';
import { dmLapTopRoute } from './dm-lap-top.route';

@NgModule({
  imports: [SophiaSharedModule, RouterModule.forChild(dmLapTopRoute)],
  declarations: [DmLapTopComponent],
  entryComponents: [],
})
export class SophiaDmLapTopModule {}
