import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDmSanPham } from 'app/shared/model/dm-san-pham.model';
import { DmSanPhamService } from './dm-san-pham.service';

@Component({
  templateUrl: './dm-san-pham-delete-dialog.component.html',
})
export class DmSanPhamDeleteDialogComponent {
  dmSanPham?: IDmSanPham;

  constructor(protected dmSanPhamService: DmSanPhamService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.dmSanPhamService.delete(id).subscribe(() => {
      this.eventManager.broadcast('dmSanPhamListModification');
      this.activeModal.close();
    });
  }
}
