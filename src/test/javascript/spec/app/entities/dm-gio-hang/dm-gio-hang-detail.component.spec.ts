import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SophiaTestModule } from '../../../test.module';
import { DmGioHangDetailComponent } from 'app/entities/dm-gio-hang/dm-gio-hang-detail.component';
import { DmGioHang } from 'app/shared/model/dm-gio-hang.model';

describe('Component Tests', () => {
  describe('DmGioHang Management Detail Component', () => {
    let comp: DmGioHangDetailComponent;
    let fixture: ComponentFixture<DmGioHangDetailComponent>;
    const route = ({ data: of({ dmGioHang: new DmGioHang(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmGioHangDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DmGioHangDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DmGioHangDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load dmGioHang on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dmGioHang).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
