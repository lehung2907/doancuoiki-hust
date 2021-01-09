import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { SophiaTestModule } from '../../../test.module';
import { DmGioHangUpdateComponent } from 'app/entities/dm-gio-hang/dm-gio-hang-update.component';
import { DmGioHangService } from 'app/entities/dm-gio-hang/dm-gio-hang.service';
import { DmGioHang } from 'app/shared/model/dm-gio-hang.model';

describe('Component Tests', () => {
  describe('DmGioHang Management Update Component', () => {
    let comp: DmGioHangUpdateComponent;
    let fixture: ComponentFixture<DmGioHangUpdateComponent>;
    let service: DmGioHangService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmGioHangUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DmGioHangUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmGioHangUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmGioHangService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new DmGioHang(123);
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
        const entity = new DmGioHang();
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
