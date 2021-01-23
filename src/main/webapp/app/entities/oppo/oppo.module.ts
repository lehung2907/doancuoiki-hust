import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OppoComponent } from './oppo.component';
import { SophiaSharedModule } from '../../shared/shared.module';
import { oppoRoute } from './oppo.route';

@NgModule({
  imports: [SophiaSharedModule, RouterModule.forChild(oppoRoute)],
  declarations: [OppoComponent],
  entryComponents: [],
})
export class SophiaOppoModule {}
