import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { SophiaTestModule } from '../../../test.module';
import { DmSanPhamDetailComponent } from 'app/entities/dm-san-pham/dm-san-pham-detail.component';
import { DmSanPham } from 'app/shared/model/dm-san-pham.model';

describe('Component Tests', () => {
  describe('DmSanPham Management Detail Component', () => {
    let comp: DmSanPhamDetailComponent;
    let fixture: ComponentFixture<DmSanPhamDetailComponent>;
    let dataUtils: JhiDataUtils;
    const route = ({ data: of({ dmSanPham: new DmSanPham(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SophiaTestModule],
        declarations: [DmSanPhamDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DmSanPhamDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DmSanPhamDetailComponent);
      comp = fixture.componentInstance;
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load dmSanPham on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dmSanPham).toEqual(jasmine.objectContaining({ id: 123 }));
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
