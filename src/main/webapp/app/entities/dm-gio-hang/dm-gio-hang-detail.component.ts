import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDmGioHang } from 'app/shared/model/dm-gio-hang.model';

@Component({
  selector: 'jhi-dm-gio-hang-detail',
  templateUrl: './dm-gio-hang-detail.component.html',
})
export class DmGioHangDetailComponent implements OnInit {
  dmGioHang: IDmGioHang | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dmGioHang }) => (this.dmGioHang = dmGioHang));
  }

  previousState(): void {
    window.history.back();
  }
}
