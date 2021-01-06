import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SophiaTestModule } from '../../../test.module';
import { DmAmThanhDetailComponent } from 'app/entities/dm-am-thanh/dm-am-thanh-detail.component';
import { DmAmThanh } from 'app/shared/model/dm-am-thanh.model';

describe('Component Tests', () => {
  describe('DmAmThanh Management Detail Component', () => {
    let comp: DmAmThanhDetailComponent;
    let fixture: ComponentFixture<DmAmThanhDetailComponent>;
    const route = ({ data: of({ dmAmThanh: new DmAmThanh(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmAmThanhDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DmAmThanhDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DmAmThanhDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load dmAmThanh on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dmAmThanh).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
