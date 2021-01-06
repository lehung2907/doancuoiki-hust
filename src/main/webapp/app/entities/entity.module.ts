import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'dm-dien-thoai',
        loadChildren: () => import('./dm-dien-thoai/dm-dien-thoai.module').then(m => m.SophiaDmDienThoaiModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class SophiaEntityModule {}
