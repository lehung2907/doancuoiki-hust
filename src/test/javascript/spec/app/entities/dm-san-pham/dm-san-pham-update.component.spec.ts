import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { SophiaTestModule } from '../../../test.module';
import { DmSanPhamUpdateComponent } from 'app/entities/dm-san-pham/dm-san-pham-update.component';
import { DmSanPhamService } from 'app/entities/dm-san-pham/dm-san-pham.service';
import { DmSanPham } from 'app/shared/model/dm-san-pham.model';

describe('Component Tests', () => {
  describe('DmSanPham Management Update Component', () => {
    let comp: DmSanPhamUpdateComponent;
    let fixture: ComponentFixture<DmSanPhamUpdateComponent>;
    let service: DmSanPhamService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmSanPhamUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DmSanPhamUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmSanPhamUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmSanPhamService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new DmSanPham(123);
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
        const entity = new DmSanPham();
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
