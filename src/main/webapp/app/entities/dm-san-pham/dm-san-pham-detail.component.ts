import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IDmSanPham } from 'app/shared/model/dm-san-pham.model';

@Component({
  selector: 'jhi-dm-san-pham-detail',
  templateUrl: './dm-san-pham-detail.component.html',
})
export class DmSanPhamDetailComponent implements OnInit {
  dmSanPham: IDmSanPham | null = null;

  constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute) {}

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
}
