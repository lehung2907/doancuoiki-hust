import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IHoaDon } from 'app/shared/model/hoa-don.model';
import { HoaDonService } from './hoa-don.service';

@Component({
  templateUrl: './hoa-don-delete-dialog.component.html',
})
export class HoaDonDeleteDialogComponent {
  hoaDon?: IHoaDon;

  constructor(protected hoaDonService: HoaDonService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.hoaDonService.delete(id).subscribe(() => {
      this.eventManager.broadcast('hoaDonListModification');
      this.activeModal.close();
    });
  }
}
