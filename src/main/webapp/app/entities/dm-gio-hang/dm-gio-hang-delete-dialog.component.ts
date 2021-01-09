import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDmGioHang } from 'app/shared/model/dm-gio-hang.model';
import { DmGioHangService } from './dm-gio-hang.service';

@Component({
  templateUrl: './dm-gio-hang-delete-dialog.component.html',
})
export class DmGioHangDeleteDialogComponent {
  dmGioHang?: IDmGioHang;

  constructor(protected dmGioHangService: DmGioHangService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.dmGioHangService.delete(id).subscribe(() => {
      this.eventManager.broadcast('dmGioHangListModification');
      this.activeModal.close();
    });
  }
}
