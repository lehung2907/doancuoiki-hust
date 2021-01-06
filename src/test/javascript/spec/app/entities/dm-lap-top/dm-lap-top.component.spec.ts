import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SophiaTestModule } from '../../../test.module';
import { DmLapTopComponent } from 'app/entities/dm-lap-top/dm-lap-top.component';
import { DmLapTopService } from 'app/entities/dm-lap-top/dm-lap-top.service';
import { DmLapTop } from 'app/shared/model/dm-lap-top.model';

describe('Component Tests', () => {
  describe('DmLapTop Management Component', () => {
    let comp: DmLapTopComponent;
    let fixture: ComponentFixture<DmLapTopComponent>;
    let service: DmLapTopService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmLapTopComponent],
      })
        .overrideTemplate(DmLapTopComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmLapTopComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmLapTopService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new DmLapTop(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dmLapTops && comp.dmLapTops[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
