import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IHoaDon } from 'app/shared/model/hoa-don.model';
import { HoaDonService } from './hoa-don.service';
import { HoaDonDeleteDialogComponent } from './hoa-don-delete-dialog.component';

@Component({
  selector: 'jhi-hoa-don',
  templateUrl: './hoa-don.component.html',
})
export class HoaDonComponent implements OnInit, OnDestroy {
  hoaDons?: IHoaDon[];
  eventSubscriber?: Subscription;

  constructor(protected hoaDonService: HoaDonService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.hoaDonService.query().subscribe((res: HttpResponse<IHoaDon[]>) => (this.hoaDons = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInHoaDons();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IHoaDon): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInHoaDons(): void {
    this.eventSubscriber = this.eventManager.subscribe('hoaDonListModification', () => this.loadAll());
  }

  delete(hoaDon: IHoaDon): void {
    const modalRef = this.modalService.open(HoaDonDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.hoaDon = hoaDon;
  }
}
