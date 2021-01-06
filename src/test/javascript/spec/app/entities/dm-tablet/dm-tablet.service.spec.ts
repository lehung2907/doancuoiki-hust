import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DmTabletService } from 'app/entities/dm-tablet/dm-tablet.service';
import { IDmTablet, DmTablet } from 'app/shared/model/dm-tablet.model';

describe('Service Tests', () => {
  describe('DmTablet Service', () => {
    let injector: TestBed;
    let service: DmTabletService;
    let httpMock: HttpTestingController;
    let elemDefault: IDmTablet;
    let expectedResult: IDmTablet | IDmTablet[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(DmTabletService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new DmTablet(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a DmTablet', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new DmTablet()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a DmTablet', () => {
        const returnedFromService = Object.assign(
          {
            hangSanXuat: 'BBBBBB',
            tenTablet: 'BBBBBB',
            giaTablet: 'BBBBBB',
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

      it('should return a list of DmTablet', () => {
        const returnedFromService = Object.assign(
          {
            hangSanXuat: 'BBBBBB',
            tenTablet: 'BBBBBB',
            giaTablet: 'BBBBBB',
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

      it('should delete a DmTablet', () => {
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
