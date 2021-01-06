import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DmAmThanhService } from 'app/entities/dm-am-thanh/dm-am-thanh.service';
import { IDmAmThanh, DmAmThanh } from 'app/shared/model/dm-am-thanh.model';

describe('Service Tests', () => {
  describe('DmAmThanh Service', () => {
    let injector: TestBed;
    let service: DmAmThanhService;
    let httpMock: HttpTestingController;
    let elemDefault: IDmAmThanh;
    let expectedResult: IDmAmThanh | IDmAmThanh[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(DmAmThanhService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new DmAmThanh(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a DmAmThanh', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new DmAmThanh()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a DmAmThanh', () => {
        const returnedFromService = Object.assign(
          {
            hangSanXuat: 'BBBBBB',
            ten: 'BBBBBB',
            gia: 'BBBBBB',
            ngayNhap: 'BBBBBB',
            ngayXuat: 'BBBBBB',
            moTaSanPham: 'BBBBBB',
            ghiChu: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of DmAmThanh', () => {
        const returnedFromService = Object.assign(
          {
            hangSanXuat: 'BBBBBB',
            ten: 'BBBBBB',
            gia: 'BBBBBB',
            ngayNhap: 'BBBBBB',
            ngayXuat: 'BBBBBB',
            moTaSanPham: 'BBBBBB',
            ghiChu: 'BBBBBB',
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

      it('should delete a DmAmThanh', () => {
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
