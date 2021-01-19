import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDmSanPham } from 'app/shared/model/dm-san-pham.model';
import { DmSanPhamService } from './dm-san-pham.service';
import { DmGioHangService } from '../dm-gio-hang/dm-gio-hang.service';

@Component({
  templateUrl: './dm-san-pham-delete-dialog.component.html',
})
export class DmSanPhamDeleteDialogComponent {
  dmSanPham?: IDmSanPham;
  item?: any;

  constructor(
    protected dmSanPhamService: DmSanPhamService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager,
    protected dmGioHangService: DmGioHangService
  ) {
    this.item = {
      id: undefined,
    };
  }

  cancel(): void {
    this.activeModal.dismiss();
  }

  addToCart(id: number): void {
    if (id) {
      this.item = {
        id: id || '',
      };
      this.dmGioHangService.addCart(this.item).subscribe(() => {
        this.activeModal.close();
      });
    }
  }
}
