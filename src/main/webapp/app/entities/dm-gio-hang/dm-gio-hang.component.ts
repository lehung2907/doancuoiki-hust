import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDmGioHang } from 'app/shared/model/dm-gio-hang.model';
import { DmGioHangService } from './dm-gio-hang.service';
import { DmGioHangDeleteDialogComponent } from './dm-gio-hang-delete-dialog.component';
import { DmGioHangUpdateComponent } from './dm-gio-hang-update.component';

@Component({
  selector: 'jhi-dm-gio-hang',
  templateUrl: './dm-gio-hang.component.html',
})
export class DmGioHangComponent implements OnInit, OnDestroy {
  dmGioHangs?: IDmGioHang[];
  eventSubscriber?: Subscription;
  tong = '104.000.000';

  constructor(
    protected dmGioHangService: DmGioHangService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.dmGioHangService.query().subscribe((res: HttpResponse<IDmGioHang[]>) => (this.dmGioHangs = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInDmGioHangs();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IDmGioHang): number {
    return item.id!;
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType = '', base64String: string): void {
    return this.dataUtils.openFile(contentType, base64String);
  }

  registerChangeInDmGioHangs(): void {
    this.eventSubscriber = this.eventManager.subscribe('dmGioHangListModification', () => this.loadAll());
  }

  delete(dmGioHang: IDmGioHang): void {
    const modalRef = this.modalService.open(DmGioHangDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.dmGioHang = dmGioHang;
  }

  detail(data?: IDmGioHang): void {
    const modalRef = this.modalService.open(DmGioHangUpdateComponent, {
      backdrop: 'static',
      // size: 'lg',
      centered: true,
    });
    modalRef.componentInstance.data = data;
    modalRef.result.then(
      () => this.loadAll(),
      () => {}
    );
  }
}
