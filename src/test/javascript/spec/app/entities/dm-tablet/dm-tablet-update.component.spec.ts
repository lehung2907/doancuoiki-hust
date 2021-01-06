import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { SophiaTestModule } from '../../../test.module';
import { DmTabletUpdateComponent } from 'app/entities/dm-tablet/dm-tablet-update.component';
import { DmTabletService } from 'app/entities/dm-tablet/dm-tablet.service';
import { DmTablet } from 'app/shared/model/dm-tablet.model';

describe('Component Tests', () => {
  describe('DmTablet Management Update Component', () => {
    let comp: DmTabletUpdateComponent;
    let fixture: ComponentFixture<DmTabletUpdateComponent>;
    let service: DmTabletService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmTabletUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DmTabletUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmTabletUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmTabletService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new DmTablet(123);
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
        const entity = new DmTablet();
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
