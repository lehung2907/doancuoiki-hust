import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { SophiaTestModule } from '../../../test.module';
import { DmGioHangDetailComponent } from 'app/entities/dm-gio-hang/dm-gio-hang-detail.component';
import { DmGioHang } from 'app/shared/model/dm-gio-hang.model';

describe('Component Tests', () => {
  describe('DmGioHang Management Detail Component', () => {
    let comp: DmGioHangDetailComponent;
    let fixture: ComponentFixture<DmGioHangDetailComponent>;
    let dataUtils: JhiDataUtils;
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
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load dmGioHang on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dmGioHang).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });

    describe('byteSize', () => {
      it('Should call byteSize from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'byteSize');
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.byteSize(fakeBase64);

        // THEN
        expect(dataUtils.byteSize).toBeCalledWith(fakeBase64);
      });
    });

    describe('openFile', () => {
      it('Should call openFile from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'openFile');
        const fakeContentType = 'fake content type';
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.openFile(fakeContentType, fakeBase64);

        // THEN
        expect(dataUtils.openFile).toBeCalledWith(fakeContentType, fakeBase64);
      });
    });
  });
});
