import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { SophiaTestModule } from '../../../test.module';
import { DmAmThanhUpdateComponent } from 'app/entities/dm-am-thanh/dm-am-thanh-update.component';
import { DmAmThanhService } from 'app/entities/dm-am-thanh/dm-am-thanh.service';
import { DmAmThanh } from 'app/shared/model/dm-am-thanh.model';

describe('Component Tests', () => {
  describe('DmAmThanh Management Update Component', () => {
    let comp: DmAmThanhUpdateComponent;
    let fixture: ComponentFixture<DmAmThanhUpdateComponent>;
    let service: DmAmThanhService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmAmThanhUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DmAmThanhUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmAmThanhUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmAmThanhService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new DmAmThanh(123);
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
        const entity = new DmAmThanh();
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
