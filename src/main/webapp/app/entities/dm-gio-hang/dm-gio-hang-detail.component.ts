import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IDmGioHang } from 'app/shared/model/dm-gio-hang.model';

@Component({
  selector: 'jhi-dm-gio-hang-detail',
  templateUrl: './dm-gio-hang-detail.component.html',
})
export class DmGioHangDetailComponent implements OnInit {
  dmGioHang: IDmGioHang | null = null;

  constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dmGioHang }) => (this.dmGioHang = dmGioHang));
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
}
