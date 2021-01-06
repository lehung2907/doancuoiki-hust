import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SophiaTestModule } from '../../../test.module';
import { DmDongHoComponent } from 'app/entities/dm-dong-ho/dm-dong-ho.component';
import { DmDongHoService } from 'app/entities/dm-dong-ho/dm-dong-ho.service';
import { DmDongHo } from 'app/shared/model/dm-dong-ho.model';

describe('Component Tests', () => {
  describe('DmDongHo Management Component', () => {
    let comp: DmDongHoComponent;
    let fixture: ComponentFixture<DmDongHoComponent>;
    let service: DmDongHoService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmDongHoComponent],
      })
        .overrideTemplate(DmDongHoComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmDongHoComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmDongHoService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new DmDongHo(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dmDongHos && comp.dmDongHos[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
