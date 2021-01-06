import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SophiaSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SophiaSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class SophiaHomeModule {}
