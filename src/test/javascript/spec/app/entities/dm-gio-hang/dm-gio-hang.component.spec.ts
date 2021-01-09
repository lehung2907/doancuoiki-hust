import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SophiaTestModule } from '../../../test.module';
import { DmGioHangComponent } from 'app/entities/dm-gio-hang/dm-gio-hang.component';
import { DmGioHangService } from 'app/entities/dm-gio-hang/dm-gio-hang.service';
import { DmGioHang } from 'app/shared/model/dm-gio-hang.model';

describe('Component Tests', () => {
  describe('DmGioHang Management Component', () => {
    let comp: DmGioHangComponent;
    let fixture: ComponentFixture<DmGioHangComponent>;
    let service: DmGioHangService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmGioHangComponent],
      })
        .overrideTemplate(DmGioHangComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmGioHangComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmGioHangService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new DmGioHang(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dmGioHangs && comp.dmGioHangs[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
