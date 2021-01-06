import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { SophiaTestModule } from '../../../test.module';
import { DmLapTopUpdateComponent } from 'app/entities/dm-lap-top/dm-lap-top-update.component';
import { DmLapTopService } from 'app/entities/dm-lap-top/dm-lap-top.service';
import { DmLapTop } from 'app/shared/model/dm-lap-top.model';

describe('Component Tests', () => {
  describe('DmLapTop Management Update Component', () => {
    let comp: DmLapTopUpdateComponent;
    let fixture: ComponentFixture<DmLapTopUpdateComponent>;
    let service: DmLapTopService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmLapTopUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DmLapTopUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmLapTopUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmLapTopService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new DmLapTop(123);
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
        const entity = new DmLapTop();
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
