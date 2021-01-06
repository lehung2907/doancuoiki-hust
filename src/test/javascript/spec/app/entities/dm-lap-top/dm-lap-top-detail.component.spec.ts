import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SophiaTestModule } from '../../../test.module';
import { DmLapTopDetailComponent } from 'app/entities/dm-lap-top/dm-lap-top-detail.component';
import { DmLapTop } from 'app/shared/model/dm-lap-top.model';

describe('Component Tests', () => {
  describe('DmLapTop Management Detail Component', () => {
    let comp: DmLapTopDetailComponent;
    let fixture: ComponentFixture<DmLapTopDetailComponent>;
    const route = ({ data: of({ dmLapTop: new DmLapTop(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmLapTopDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DmLapTopDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DmLapTopDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load dmLapTop on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dmLapTop).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
