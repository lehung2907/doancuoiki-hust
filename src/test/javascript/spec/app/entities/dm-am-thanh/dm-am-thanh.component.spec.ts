import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SophiaTestModule } from '../../../test.module';
import { DmAmThanhComponent } from 'app/entities/dm-am-thanh/dm-am-thanh.component';
import { DmAmThanhService } from 'app/entities/dm-am-thanh/dm-am-thanh.service';
import { DmAmThanh } from 'app/shared/model/dm-am-thanh.model';

describe('Component Tests', () => {
  describe('DmAmThanh Management Component', () => {
    let comp: DmAmThanhComponent;
    let fixture: ComponentFixture<DmAmThanhComponent>;
    let service: DmAmThanhService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmAmThanhComponent],
      })
        .overrideTemplate(DmAmThanhComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmAmThanhComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmAmThanhService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new DmAmThanh(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dmAmThanhs && comp.dmAmThanhs[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
