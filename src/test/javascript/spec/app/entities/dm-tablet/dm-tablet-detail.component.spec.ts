import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SophiaTestModule } from '../../../test.module';
import { DmTabletDetailComponent } from 'app/entities/dm-tablet/dm-tablet-detail.component';
import { DmTablet } from 'app/shared/model/dm-tablet.model';

describe('Component Tests', () => {
  describe('DmTablet Management Detail Component', () => {
    let comp: DmTabletDetailComponent;
    let fixture: ComponentFixture<DmTabletDetailComponent>;
    const route = ({ data: of({ dmTablet: new DmTablet(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmTabletDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DmTabletDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DmTabletDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load dmTablet on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dmTablet).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
