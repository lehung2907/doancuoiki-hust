import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DmDienThoaiService } from 'app/entities/dm-dien-thoai/dm-dien-thoai.service';
import { IDmDienThoai, DmDienThoai } from 'app/shared/model/dm-dien-thoai.model';

describe('Service Tests', () => {
  describe('DmDienThoai Service', () => {
    let injector: TestBed;
    let service: DmDienThoaiService;
    let httpMock: HttpTestingController;
    let elemDefault: IDmDienThoai;
    let expectedResult: IDmDienThoai | IDmDienThoai[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(DmDienThoaiService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new DmDienThoai(
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'image/png',
        'AAAAAAA'
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a DmDienThoai', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new DmDienThoai()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a DmDienThoai', () => {
        const returnedFromService = Object.assign(
          {
            hangSanXuat: 'BBBBBB',
            tenDienThoai: 'BBBBBB',
            giaDienThoai: 'BBBBBB',
            ngayNhap: 'BBBBBB',
            ngayXuat: 'BBBBBB',
            daBan: 'BBBBBB',
            moTaSanPham: 'BBBBBB',
            ghiChu: 'BBBBBB',
            hinhSanPham: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of DmDienThoai', () => {
        const returnedFromService = Object.assign(
          {
            hangSanXuat: 'BBBBBB',
            tenDienThoai: 'BBBBBB',
            giaDienThoai: 'BBBBBB',
            ngayNhap: 'BBBBBB',
            ngayXuat: 'BBBBBB',
            daBan: 'BBBBBB',
            moTaSanPham: 'BBBBBB',
            ghiChu: 'BBBBBB',
            hinhSanPham: 'BBBBBB',
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

      it('should delete a DmDienThoai', () => {
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
