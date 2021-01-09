import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DmSanPhamService } from 'app/entities/dm-san-pham/dm-san-pham.service';
import { IDmSanPham, DmSanPham } from 'app/shared/model/dm-san-pham.model';

describe('Service Tests', () => {
  describe('DmSanPham Service', () => {
    let injector: TestBed;
    let service: DmSanPhamService;
    let httpMock: HttpTestingController;
    let elemDefault: IDmSanPham;
    let expectedResult: IDmSanPham | IDmSanPham[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(DmSanPhamService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new DmSanPham(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'image/png', 'AAAAAAA', 0, 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a DmSanPham', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new DmSanPham()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a DmSanPham', () => {
        const returnedFromService = Object.assign(
          {
            loaiSanPham: 'BBBBBB',
            thuongHieu: 'BBBBBB',
            ten: 'BBBBBB',
            gia: 'BBBBBB',
            moTa: 'BBBBBB',
            anh: 'BBBBBB',
            soDaBan: 1,
            trangThai: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of DmSanPham', () => {
        const returnedFromService = Object.assign(
          {
            loaiSanPham: 'BBBBBB',
            thuongHieu: 'BBBBBB',
            ten: 'BBBBBB',
            gia: 'BBBBBB',
            moTa: 'BBBBBB',
            anh: 'BBBBBB',
            soDaBan: 1,
            trangThai: 'BBBBBB',
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

      it('should delete a DmSanPham', () => {
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
