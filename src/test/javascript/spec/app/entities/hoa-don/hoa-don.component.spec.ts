import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SophiaTestModule } from '../../../test.module';
import { HoaDonComponent } from 'app/entities/hoa-don/hoa-don.component';
import { HoaDonService } from 'app/entities/hoa-don/hoa-don.service';
import { HoaDon } from 'app/shared/model/hoa-don.model';

describe('Component Tests', () => {
  describe('HoaDon Management Component', () => {
    let comp: HoaDonComponent;
    let fixture: ComponentFixture<HoaDonComponent>;
    let service: HoaDonService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [HoaDonComponent],
      })
        .overrideTemplate(HoaDonComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(HoaDonComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(HoaDonService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new HoaDon(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.hoaDons && comp.hoaDons[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
