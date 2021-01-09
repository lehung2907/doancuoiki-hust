import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IDmGioHang, DmGioHang } from 'app/shared/model/dm-gio-hang.model';
import { DmGioHangService } from './dm-gio-hang.service';

@Component({
  selector: 'jhi-dm-gio-hang-update',
  templateUrl: './dm-gio-hang-update.component.html',
})
export class DmGioHangUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    userId: [],
    dmSanPhamId: [],
    dmMauId: [],
    soLuong: [],
    gia: [],
    hoaDon: [],
  });

  constructor(protected dmGioHangService: DmGioHangService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dmGioHang }) => {
      this.updateForm(dmGioHang);
    });
  }

  updateForm(dmGioHang: IDmGioHang): void {
    this.editForm.patchValue({
      id: dmGioHang.id,
      userId: dmGioHang.userId,
      dmSanPhamId: dmGioHang.dmSanPhamId,
      dmMauId: dmGioHang.dmMauId,
      soLuong: dmGioHang.soLuong,
      gia: dmGioHang.gia,
      hoaDon: dmGioHang.hoaDon,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const dmGioHang = this.createFromForm();
    if (dmGioHang.id !== undefined) {
      this.subscribeToSaveResponse(this.dmGioHangService.update(dmGioHang));
    } else {
      this.subscribeToSaveResponse(this.dmGioHangService.create(dmGioHang));
    }
  }

  private createFromForm(): IDmGioHang {
    return {
      ...new DmGioHang(),
      id: this.editForm.get(['id'])!.value,
      userId: this.editForm.get(['userId'])!.value,
      dmSanPhamId: this.editForm.get(['dmSanPhamId'])!.value,
      dmMauId: this.editForm.get(['dmMauId'])!.value,
      soLuong: this.editForm.get(['soLuong'])!.value,
      gia: this.editForm.get(['gia'])!.value,
      hoaDon: this.editForm.get(['hoaDon'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDmGioHang>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
