import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { IDmGioHang, DmGioHang } from 'app/shared/model/dm-gio-hang.model';
import { DmGioHangService } from './dm-gio-hang.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-dm-gio-hang-update',
  templateUrl: './dm-gio-hang-update.component.html',
})
export class DmGioHangUpdateComponent implements OnInit {
  isSaving = false;
  data?: IDmGioHang;
  soLuong?: any;
  item?: any;

  editForm = this.fb.group({
    id: [],
    login: [],
    dmSanPhamId: [],
    anhSp: [],
    anhSpContentType: [],
    soLuong: [],
    gia: [],
    hoaDonId: [],
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected dmGioHangService: DmGioHangService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) {
    this.item = {
      id: undefined,
      sl: undefined,
    };
    this.soLuong = {
      sl: undefined,
    };
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dmGioHang }) => {
      this.updateForm(dmGioHang);
    });
  }

  saveSl(): void {
    if (this.soLuong && this.data) {
      this.item = {
        id: this.data.id || '',
        sl: this.soLuong.sl || 1,
      };
    }
    this.dmGioHangService.querySl(this.item).subscribe(() => {
      this.activeModal.close();
    });
  }

  updateForm(dmGioHang: IDmGioHang): void {
    this.editForm.patchValue({
      id: dmGioHang.id,
      login: dmGioHang.login,
      dmSanPhamId: dmGioHang.dmSanPhamId,
      anhSp: dmGioHang.anhSp,
      anhSpContentType: dmGioHang.anhSpContentType,
      soLuong: dmGioHang.soLuong,
      gia: dmGioHang.gia,
      hoaDonId: dmGioHang.hoaDonId,
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType: string, base64String: string): void {
    this.dataUtils.openFile(contentType, base64String);
  }

  setFileData(event: any, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe(null, (err: JhiFileLoadError) => {
      this.eventManager.broadcast(
        new JhiEventWithContent<AlertError>('sophiaApp.error', { ...err, key: 'error.file.' + err.key })
      );
    });
  }

  clearInputImage(field: string, fieldContentType: string, idInput: string): void {
    this.editForm.patchValue({
      [field]: null,
      [fieldContentType]: null,
    });
    if (this.elementRef && idInput && this.elementRef.nativeElement.querySelector('#' + idInput)) {
      this.elementRef.nativeElement.querySelector('#' + idInput).value = null;
    }
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
      login: this.editForm.get(['login'])!.value,
      dmSanPhamId: this.editForm.get(['dmSanPhamId'])!.value,
      anhSpContentType: this.editForm.get(['anhSpContentType'])!.value,
      anhSp: this.editForm.get(['anhSp'])!.value,
      soLuong: this.editForm.get(['soLuong'])!.value,
      gia: this.editForm.get(['gia'])!.value,
      hoaDonId: this.editForm.get(['hoaDonId'])!.value,
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

  dismiss(): void {
    this.activeModal.dismiss();
  }

  close(): void {
    this.activeModal.close();
  }
}
