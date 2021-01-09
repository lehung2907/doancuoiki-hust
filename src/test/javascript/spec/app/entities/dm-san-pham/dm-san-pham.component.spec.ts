import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SophiaTestModule } from '../../../test.module';
import { DmSanPhamComponent } from 'app/entities/dm-san-pham/dm-san-pham.component';
import { DmSanPhamService } from 'app/entities/dm-san-pham/dm-san-pham.service';
import { DmSanPham } from 'app/shared/model/dm-san-pham.model';

describe('Component Tests', () => {
  describe('DmSanPham Management Component', () => {
    let comp: DmSanPhamComponent;
    let fixture: ComponentFixture<DmSanPhamComponent>;
    let service: DmSanPhamService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmSanPhamComponent],
      })
        .overrideTemplate(DmSanPhamComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmSanPhamComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmSanPhamService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new DmSanPham(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dmSanPhams && comp.dmSanPhams[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
