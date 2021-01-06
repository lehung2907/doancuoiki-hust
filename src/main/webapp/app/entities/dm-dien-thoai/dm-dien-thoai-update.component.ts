import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { IDmDienThoai, DmDienThoai } from 'app/shared/model/dm-dien-thoai.model';
import { DmDienThoaiService } from './dm-dien-thoai.service';
import { AlertError } from 'app/shared/alert/alert-error.model';

@Component({
  selector: 'jhi-dm-dien-thoai-update',
  templateUrl: './dm-dien-thoai-update.component.html',
})
export class DmDienThoaiUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    hangSanXuat: [],
    tenDienThoai: [],
    giaDienThoai: [],
    ngayNhap: [],
    ngayXuat: [],
    daBan: [],
    moTaSanPham: [],
    ghiChu: [],
    hinhSanPham: [],
    hinhSanPhamContentType: [],
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected dmDienThoaiService: DmDienThoaiService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dmDienThoai }) => {
      this.updateForm(dmDienThoai);
    });
  }

  updateForm(dmDienThoai: IDmDienThoai): void {
    this.editForm.patchValue({
      id: dmDienThoai.id,
      hangSanXuat: dmDienThoai.hangSanXuat,
      tenDienThoai: dmDienThoai.tenDienThoai,
      giaDienThoai: dmDienThoai.giaDienThoai,
      ngayNhap: dmDienThoai.ngayNhap,
      ngayXuat: dmDienThoai.ngayXuat,
      daBan: dmDienThoai.daBan,
      moTaSanPham: dmDienThoai.moTaSanPham,
      ghiChu: dmDienThoai.ghiChu,
      hinhSanPham: dmDienThoai.hinhSanPham,
      hinhSanPhamContentType: dmDienThoai.hinhSanPhamContentType,
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
    const dmDienThoai = this.createFromForm();
    if (dmDienThoai.id !== undefined) {
      this.subscribeToSaveResponse(this.dmDienThoaiService.update(dmDienThoai));
    } else {
      this.subscribeToSaveResponse(this.dmDienThoaiService.create(dmDienThoai));
    }
  }

  private createFromForm(): IDmDienThoai {
    return {
      ...new DmDienThoai(),
      id: this.editForm.get(['id'])!.value,
      hangSanXuat: this.editForm.get(['hangSanXuat'])!.value,
      tenDienThoai: this.editForm.get(['tenDienThoai'])!.value,
      giaDienThoai: this.editForm.get(['giaDienThoai'])!.value,
      ngayNhap: this.editForm.get(['ngayNhap'])!.value,
      ngayXuat: this.editForm.get(['ngayXuat'])!.value,
      daBan: this.editForm.get(['daBan'])!.value,
      moTaSanPham: this.editForm.get(['moTaSanPham'])!.value,
      ghiChu: this.editForm.get(['ghiChu'])!.value,
      hinhSanPhamContentType: this.editForm.get(['hinhSanPhamContentType'])!.value,
      hinhSanPham: this.editForm.get(['hinhSanPham'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDmDienThoai>>): void {
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
