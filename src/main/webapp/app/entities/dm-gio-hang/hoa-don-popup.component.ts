import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HoaDonService } from '../hoa-don/hoa-don.service';
import { IHoaDon } from '../../shared/model/hoa-don.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DmGioHang, IDmGioHang } from '../../shared/model/dm-gio-hang.model';
import { JhiDataUtils } from 'ng-jhipster';
import { DmGioHangService } from './dm-gio-hang.service';
import { DmGioHangDTO, IDmGioHangDTO } from '../../shared/model/dm-gIo-hang-detailDTO';

@Component({
  selector: 'jhi-hoa-don-popup',
  templateUrl: './hoa-don-popup.component.html',
})
export class HoaDonPopupComponent implements OnInit {
  isSaving = false;
  data?: DmGioHang[];
  thongTinKh?: DmGioHangDTO;
  tong?: any;
  dmGioHangs?: any;
  thongTin?: any;

  constructor(
    protected hoaDonService: HoaDonService,
    protected dmGioHangService: DmGioHangService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    protected dataUtils: JhiDataUtils,
    public activeModal: NgbActiveModal,
    protected modalService: NgbModal
  ) {
    this.tong = 0;
    this.thongTin = {
      tenKhachHang: '',
      soDienThoai: '',
      email: '',
      diaChi: '',
      ghiChu: '',
    };
    this.dmGioHangs = {
      tenKhachHang: '',
      soDienThoai: '',
      email: '',
      diaChi: '',
      ghiChu: '',
      dmGioHangs: '',
    };
  }

  ngOnInit(): void {
    if (this.data) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].trangThai === 'Chờ thanh toán') {
          this.tong += this.data[i].thanhTien;
        }
      }
    }
  }

  // , this.thongTin
  save(): void {
    if (this.data && this.thongTin) {
      this.dmGioHangs = {
        tenKhachHang: this.thongTin.tenKhachHang,
        soDienThoai: this.thongTin.soDienThoai,
        email: this.thongTin.email,
        diaChi: this.thongTin.diaChi,
        ghiChu: this.thongTin.ghiChu,
        dmGioHangs: this.data,
      };
    }
    this.dmGioHangService.saveHoaDon(this.dmGioHangs).subscribe(any => {});
    this.activeModal.dismiss();
  }

  previousState(): void {
    window.history.back();
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

  openFile(contentType = '', base64String: string): void {
    return this.dataUtils.openFile(contentType, base64String);
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  dismiss(): void {
    this.activeModal.dismiss();
  }

  close(): void {
    this.activeModal.close();
  }
}
