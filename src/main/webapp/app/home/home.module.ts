import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SophiaSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [SophiaSharedModule, RouterModule.forChild([...HOME_ROUTE])],
  declarations: [HomeComponent],
  providers: [NgbActiveModal],
})
export class SophiaHomeModule {}
