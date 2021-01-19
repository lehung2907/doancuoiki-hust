import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDmDienThoai } from 'app/shared/model/dm-dien-thoai.model';
import { IDmSanPham } from '../../shared/model/dm-san-pham.model';
import { DmSanPhamService } from '../dm-san-pham/dm-san-pham.service';
import { DmGioHangService } from '../dm-gio-hang/dm-gio-hang.service';
import { PagingModel } from '../../shared/util/paging.model';

@Component({
  selector: 'jhi-dm-lap-top',
  templateUrl: './dm-lap-top.component.html',
})
export class DmLapTopComponent implements OnInit, OnDestroy {
  eventSubscriber?: Subscription;
  dmSanPhams?: IDmSanPham[];
  itemSearch?: any;
  paging = new PagingModel();

  constructor(
    protected dmSanPhamService: DmSanPhamService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    protected dmGioHangService: DmGioHangService
  ) {
    this.itemSearch = {
      page: this.paging.pageIndex,
      size: this.paging.pageSize,
    };
  }

  loadAll(): void {
    this.dmSanPhamService.queryAllLapTop(this.itemSearch).subscribe(
      (res: HttpResponse<Array<any>>) => {
        if (res.body) {
          this.dmSanPhams = res.body || [];
          if (res.headers) {
            this.paging.totalItem = Number(res.headers.get('X-Total-Count'));
          } else {
            this.paging.totalItem = 0;
          }
        } else {
          this.paging.totalItem = 0;
          this.dmSanPhams = [];
        }
      },
      () => {
        this.paging.totalItem = 0;
        this.dmSanPhams = [];
      }
    );
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInDmDienThoais();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IDmDienThoai): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType = '', base64String: string): void {
    return this.dataUtils.openFile(contentType, base64String);
  }

  registerChangeInDmDienThoais(): void {
    this.eventSubscriber = this.eventManager.subscribe('dmDienThoaiListModification', () => this.loadAll());
  }
}
