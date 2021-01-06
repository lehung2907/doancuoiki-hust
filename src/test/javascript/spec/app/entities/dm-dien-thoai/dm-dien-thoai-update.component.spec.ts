import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { SophiaTestModule } from '../../../test.module';
import { DmDienThoaiUpdateComponent } from 'app/entities/dm-dien-thoai/dm-dien-thoai-update.component';
import { DmDienThoaiService } from 'app/entities/dm-dien-thoai/dm-dien-thoai.service';
import { DmDienThoai } from 'app/shared/model/dm-dien-thoai.model';

describe('Component Tests', () => {
  describe('DmDienThoai Management Update Component', () => {
    let comp: DmDienThoaiUpdateComponent;
    let fixture: ComponentFixture<DmDienThoaiUpdateComponent>;
    let service: DmDienThoaiService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmDienThoaiUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DmDienThoaiUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmDienThoaiUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmDienThoaiService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new DmDienThoai(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new DmDienThoai();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
