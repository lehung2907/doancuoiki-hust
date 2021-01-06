import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SophiaTestModule } from '../../../test.module';
import { DmDongHoDetailComponent } from 'app/entities/dm-dong-ho/dm-dong-ho-detail.component';
import { DmDongHo } from 'app/shared/model/dm-dong-ho.model';

describe('Component Tests', () => {
  describe('DmDongHo Management Detail Component', () => {
    let comp: DmDongHoDetailComponent;
    let fixture: ComponentFixture<DmDongHoDetailComponent>;
    const route = ({ data: of({ dmDongHo: new DmDongHo(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmDongHoDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DmDongHoDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DmDongHoDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load dmDongHo on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dmDongHo).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
