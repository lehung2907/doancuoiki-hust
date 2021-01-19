import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DmGioHangService } from 'app/entities/dm-gio-hang/dm-gio-hang.service';
import { IDmGioHang, DmGioHang } from 'app/shared/model/dm-gio-hang.model';

describe('Service Tests', () => {
  describe('DmGioHang Service', () => {
    let injector: TestBed;
    let service: DmGioHangService;
    let httpMock: HttpTestingController;
    let elemDefault: IDmGioHang;
    let expectedResult: IDmGioHang | IDmGioHang[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(DmGioHangService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new DmGioHang(0, 'AAAAAAA', 0, 'image/png', 'AAAAAAA', 0, 0, 0);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a DmGioHang', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new DmGioHang()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a DmGioHang', () => {
        const returnedFromService = Object.assign(
          {
            login: 'BBBBBB',
            dmSanPhamId: 1,
            anhSp: 'BBBBBB',
            soLuong: 1,
            gia: 1,
            hoaDonId: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of DmGioHang', () => {
        const returnedFromService = Object.assign(
          {
            login: 'BBBBBB',
            dmSanPhamId: 1,
            anhSp: 'BBBBBB',
            soLuong: 1,
            gia: 1,
            hoaDonId: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a DmGioHang', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
