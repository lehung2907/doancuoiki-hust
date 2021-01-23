import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IHoaDon, HoaDon } from 'app/shared/model/hoa-don.model';
import { HoaDonService } from './hoa-don.service';

@Component({
  selector: 'jhi-hoa-don-update',
  templateUrl: './hoa-don-update.component.html',
})
export class HoaDonUpdateComponent implements OnInit {
  isSaving = false;
  ngayLapDp: any;

  editForm = this.fb.group({
    id: [],
    login: [],
    dmSanPhamId: [],
    soLuong: [],
    gia: [],
    ten: [],
    diaChi: [],
    soDienThoai: [],
    email: [],
    trangThai: [],
    ghiChu: [],
    ngayLap: [],
    trangThai2: [],
  });

  constructor(protected hoaDonService: HoaDonService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ hoaDon }) => {
      this.updateForm(hoaDon);
    });
  }

  updateForm(hoaDon: IHoaDon): void {
    this.editForm.patchValue({
      id: hoaDon.id,
      login: hoaDon.login,
      dmSanPhamId: hoaDon.dmSanPhamId,
      soLuong: hoaDon.soLuong,
      gia: hoaDon.gia,
      ten: hoaDon.ten,
      diaChi: hoaDon.diaChi,
      soDienThoai: hoaDon.soDienThoai,
      email: hoaDon.email,
      trangThai: hoaDon.trangThai,
      ghiChu: hoaDon.ghiChu,
      ngayLap: hoaDon.ngayLap,
      trangThai2: hoaDon.trangThai2,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const hoaDon = this.createFromForm();
    if (hoaDon.id !== undefined) {
      this.subscribeToSaveResponse(this.hoaDonService.update(hoaDon));
    } else {
      this.subscribeToSaveResponse(this.hoaDonService.create(hoaDon));
    }
  }

  private createFromForm(): IHoaDon {
    return {
      ...new HoaDon(),
      id: this.editForm.get(['id'])!.value,
      login: this.editForm.get(['login'])!.value,
      dmSanPhamId: this.editForm.get(['dmSanPhamId'])!.value,
      soLuong: this.editForm.get(['soLuong'])!.value,
      gia: this.editForm.get(['gia'])!.value,
      ten: this.editForm.get(['ten'])!.value,
      diaChi: this.editForm.get(['diaChi'])!.value,
      soDienThoai: this.editForm.get(['soDienThoai'])!.value,
      email: this.editForm.get(['email'])!.value,
      trangThai: this.editForm.get(['trangThai'])!.value,
      ghiChu: this.editForm.get(['ghiChu'])!.value,
      ngayLap: this.editForm.get(['ngayLap'])!.value,
      trangThai2: this.editForm.get(['trangThai2'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IHoaDon>>): void {
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
