import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SophiaTestModule } from '../../../test.module';
import { DmDienThoaiComponent } from 'app/entities/dm-dien-thoai/dm-dien-thoai.component';
import { DmDienThoaiService } from 'app/entities/dm-dien-thoai/dm-dien-thoai.service';
import { DmDienThoai } from 'app/shared/model/dm-dien-thoai.model';

describe('Component Tests', () => {
  describe('DmDienThoai Management Component', () => {
    let comp: DmDienThoaiComponent;
    let fixture: ComponentFixture<DmDienThoaiComponent>;
    let service: DmDienThoaiService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmDienThoaiComponent],
      })
        .overrideTemplate(DmDienThoaiComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DmDienThoaiComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DmDienThoaiService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new DmDienThoai(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dmDienThoais && comp.dmDienThoais[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
