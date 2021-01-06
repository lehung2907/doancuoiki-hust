import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SophiaTestModule } from '../../../test.module';
import { DmTabletComponent } from 'app/entities/dm-tablet/dm-tablet.component';
import { DmTabletService } from 'app/entities/dm-tablet/dm-tablet.service';
import { DmTablet } from 'app/shared/model/dm-tablet.model';

describe('Component Tests', () => {
  describe('DmTablet Management Component', () => {
    let comp: DmTabletComponent;
    let fixture: ComponentFixture<DmTabletComponent>;
    let service: DmTabletService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmTabletComponent],
      })
        .overrideTemplate(DmTabletComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmTabletComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmTabletService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new DmTablet(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dmTablets && comp.dmTablets[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
