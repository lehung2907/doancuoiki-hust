import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IDmSanPham } from 'app/shared/model/dm-san-pham.model';
import { DmGioHangService } from '../dm-gio-hang/dm-gio-hang.service';

@Component({
  selector: 'jhi-dm-san-pham-detail',
  templateUrl: './dm-san-pham-detail.component.html',
})
export class DmSanPhamDetailComponent implements OnInit {
  dmSanPham?: IDmSanPham;

  item?: any;

  constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute, protected dmGioHangService: DmGioHangService) {
    this.item = {
      id: undefined,
    };
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dmSanPham }) => (this.dmSanPham = dmSanPham));
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType = '', base64String: string): void {
    this.dataUtils.openFile(contentType, base64String);
  }

  previousState(): void {
    window.history.back();
  }

  addToCart(): void {
    if (this.dmSanPham) {
      this.item = {
        id: this.dmSanPham.id || '',
      };
      this.dmGioHangService.addCart(this.item).subscribe();
    }
  }

  myFunction(): void {
    confirm('Press a button!');
  }
}
