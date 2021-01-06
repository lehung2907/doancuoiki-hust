import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDmDienThoai } from 'app/shared/model/dm-dien-thoai.model';
import { DmDienThoaiService } from './dm-dien-thoai.service';

@Component({
  templateUrl: './dm-dien-thoai-delete-dialog.component.html',
})
export class DmDienThoaiDeleteDialogComponent {
  dmDienThoai?: IDmDienThoai;

  constructor(
    protected dmDienThoaiService: DmDienThoaiService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.dmDienThoaiService.delete(id).subscribe(() => {
      this.eventManager.broadcast('dmDienThoaiListModification');
      this.activeModal.close();
    });
  }
}
