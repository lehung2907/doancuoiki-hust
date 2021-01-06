import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { SophiaTestModule } from '../../../test.module';
import { DmDongHoUpdateComponent } from 'app/entities/dm-dong-ho/dm-dong-ho-update.component';
import { DmDongHoService } from 'app/entities/dm-dong-ho/dm-dong-ho.service';
import { DmDongHo } from 'app/shared/model/dm-dong-ho.model';

describe('Component Tests', () => {
  describe('DmDongHo Management Update Component', () => {
    let comp: DmDongHoUpdateComponent;
    let fixture: ComponentFixture<DmDongHoUpdateComponent>;
    let service: DmDongHoService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmDongHoUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DmDongHoUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmDongHoUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmDongHoService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new DmDongHo(123);
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
        const entity = new DmDongHo();
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
