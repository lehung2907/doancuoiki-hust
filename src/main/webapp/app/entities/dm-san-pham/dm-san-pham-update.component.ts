import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { IDmSanPham, DmSanPham } from 'app/shared/model/dm-san-pham.model';
import { DmSanPhamService } from './dm-san-pham.service';
import { AlertError } from 'app/shared/alert/alert-error.model';

@Component({
  selector: 'jhi-dm-san-pham-update',
  templateUrl: './dm-san-pham-update.component.html',
})
export class DmSanPhamUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    loaiSanPham: [],
    thuongHieu: [],
    ten: [],
    gia: [],
    moTa: [],
    anh: [],
    anhContentType: [],
    soDaBan: [],
    trangThai: [],
    cpu: [],
    gpu: [],
    boNho: [],
    ram: [],
    manHinh: [],
    camera: [],
    sim: [],
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected dmSanPhamService: DmSanPhamService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dmSanPham }) => {
      this.updateForm(dmSanPham);
    });
  }

  updateForm(dmSanPham: IDmSanPham): void {
    this.editForm.patchValue({
      id: dmSanPham.id,
      loaiSanPham: dmSanPham.loaiSanPham,
      thuongHieu: dmSanPham.thuongHieu,
      ten: dmSanPham.ten,
      gia: dmSanPham.gia,
      moTa: dmSanPham.moTa,
      anh: dmSanPham.anh,
      anhContentType: dmSanPham.anhContentType,
      soDaBan: dmSanPham.soDaBan,
      trangThai: dmSanPham.trangThai,
      cpu: dmSanPham.cpu,
      gpu: dmSanPham.gpu,
      boNho: dmSanPham.boNho,
      ram: dmSanPham.ram,
      manHinh: dmSanPham.manHinh,
      camera: dmSanPham.camera,
      sim: dmSanPham.sim,
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
    const dmSanPham = this.createFromForm();
    if (dmSanPham.id !== undefined) {
      this.subscribeToSaveResponse(this.dmSanPhamService.update(dmSanPham));
    } else {
      this.subscribeToSaveResponse(this.dmSanPhamService.create(dmSanPham));
    }
  }

  private createFromForm(): IDmSanPham {
    return {
      ...new DmSanPham(),
      id: this.editForm.get(['id'])!.value,
      loaiSanPham: this.editForm.get(['loaiSanPham'])!.value,
      thuongHieu: this.editForm.get(['thuongHieu'])!.value,
      ten: this.editForm.get(['ten'])!.value,
      gia: this.editForm.get(['gia'])!.value,
      moTa: this.editForm.get(['moTa'])!.value,
      anhContentType: this.editForm.get(['anhContentType'])!.value,
      anh: this.editForm.get(['anh'])!.value,
      soDaBan: this.editForm.get(['soDaBan'])!.value,
      trangThai: this.editForm.get(['trangThai'])!.value,
      cpu: this.editForm.get(['cpu'])!.value,
      gpu: this.editForm.get(['gpu'])!.value,
      boNho: this.editForm.get(['boNho'])!.value,
      ram: this.editForm.get(['ram'])!.value,
      manHinh: this.editForm.get(['manHinh'])!.value,
      camera: this.editForm.get(['camera'])!.value,
      sim: this.editForm.get(['sim'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDmSanPham>>): void {
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
