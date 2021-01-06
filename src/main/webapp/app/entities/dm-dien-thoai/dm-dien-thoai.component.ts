import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDmDienThoai } from 'app/shared/model/dm-dien-thoai.model';
import { DmDienThoaiService } from './dm-dien-thoai.service';
import { DmDienThoaiDeleteDialogComponent } from './dm-dien-thoai-delete-dialog.component';

@Component({
  selector: 'jhi-dm-dien-thoai',
  templateUrl: './dm-dien-thoai.component.html',
})
export class DmDienThoaiComponent implements OnInit, OnDestroy {
  dmDienThoais?: IDmDienThoai[];
  eventSubscriber?: Subscription;

  constructor(
    protected dmDienThoaiService: DmDienThoaiService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.dmDienThoaiService.query().subscribe((res: HttpResponse<IDmDienThoai[]>) => (this.dmDienThoais = res.body || []));
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

  delete(dmDienThoai: IDmDienThoai): void {
    const modalRef = this.modalService.open(DmDienThoaiDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.dmDienThoai = dmDienThoai;
  }
}
