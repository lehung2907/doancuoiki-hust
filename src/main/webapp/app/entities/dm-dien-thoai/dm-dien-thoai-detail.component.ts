import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IDmDienThoai } from 'app/shared/model/dm-dien-thoai.model';

@Component({
  selector: 'jhi-dm-dien-thoai-detail',
  templateUrl: './dm-dien-thoai-detail.component.html',
})
export class DmDienThoaiDetailComponent implements OnInit {
  dmDienThoai: IDmDienThoai | null = null;

  constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dmDienThoai }) => (this.dmDienThoai = dmDienThoai));
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
