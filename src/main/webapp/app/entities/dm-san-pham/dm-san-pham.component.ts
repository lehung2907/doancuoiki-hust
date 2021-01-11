import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDmSanPham } from 'app/shared/model/dm-san-pham.model';
import { DmSanPhamService } from './dm-san-pham.service';
import { DmSanPhamDeleteDialogComponent } from './dm-san-pham-delete-dialog.component';
import { DmGioHangService } from '../dm-gio-hang/dm-gio-hang.service';

@Component({
  selector: 'jhi-dm-san-pham',
  templateUrl: './dm-san-pham.component.html',
})
export class DmSanPhamComponent implements OnInit, OnDestroy {
  dmSanPhams?: IDmSanPham[];
  eventSubscriber?: Subscription;

  constructor(
    protected dmSanPhamService: DmSanPhamService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    protected dmGioHangService: DmGioHangService
  ) {}

  loadAll(): void {
    this.dmSanPhamService.query().subscribe((res: HttpResponse<IDmSanPham[]>) => (this.dmSanPhams = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInDmSanPhams();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IDmSanPham): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType = '', base64String: string): void {
    return this.dataUtils.openFile(contentType, base64String);
  }

  registerChangeInDmSanPhams(): void {
    this.eventSubscriber = this.eventManager.subscribe('dmSanPhamListModification', () => this.loadAll());
  }

  delete(dmSanPham: IDmSanPham): void {
    const modalRef = this.modalService.open(DmSanPhamDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.dmSanPham = dmSanPham;
  }

  addToCart(req: any): void {
    this.dmGioHangService.addCart(req);
  }
}
