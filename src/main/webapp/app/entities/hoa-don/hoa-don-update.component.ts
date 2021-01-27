import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IHoaDon, HoaDon } from 'app/shared/model/hoa-don.model';
import { HoaDonService } from './hoa-don.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IDTrangThai } from '../../shared/model/dmTrangThai';

@Component({
  selector: 'jhi-hoa-don-update',
  templateUrl: './hoa-don-update.component.html',
})
export class HoaDonUpdateComponent implements OnInit {
  isSaving = false;
  ngayLapDp: any;
  data?: IHoaDon;
  dmTrangThais?: IDTrangThai[];
  dmTrangThai?: IDTrangThai;
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

  constructor(
    protected hoaDonService: HoaDonService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) {
    this.dmTrangThais = [];
    this.dmTrangThai = {
      id: 1,
      trangThai: 'aaaaaaaaaaaa',
    };
  }

  ngOnInit(): void {
    if (!this.data) {
      this.data = new HoaDon();
    }
    this.updateForm(this.data);
    this.loadTt();
  }

  loadTt(): void {
    const dmTrangThai1 = {
      id: 1,
      trangThai: 'Chờ thanh toán',
    };
    const dmTrangThai2 = {
      id: 2,
      trangThai: 'Đang giao hàng',
    };
    const dmTrangThai3 = {
      id: 3,
      trangThai: 'Giao hàng thành công',
    };
    const dmTrangThai4 = {
      id: 4,
      trangThai: 'Giao hàng thất bại',
    };
    this.dmTrangThais?.push(dmTrangThai1);
    this.dmTrangThais?.push(dmTrangThai2);
    this.dmTrangThais?.push(dmTrangThai3);
    this.dmTrangThais?.push(dmTrangThai4);
    if (this.dmTrangThais) this.dmTrangThai = this.dmTrangThais[1];
    if (this.data?.trangThai && this.dmTrangThais) {
      const tthai = this.dmTrangThais.filter(oj => oj.trangThai === this.data?.trangThai);
      this.dmTrangThai = tthai.length ? tthai[0] : this.dmTrangThais[0];
      this.editForm.patchValue({
        trangThai: this.dmTrangThai,
      });
    } else {
      if (this.dmTrangThais) {
        this.editForm.patchValue({
          trangThai: this.dmTrangThais[0],
        });
      }
    }
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
      trangThai: this.editForm.get(['trangThai'])!.value.trangThai,
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

  dismiss(): void {
    this.activeModal.dismiss();
  }

  close(): void {
    this.activeModal.close();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
