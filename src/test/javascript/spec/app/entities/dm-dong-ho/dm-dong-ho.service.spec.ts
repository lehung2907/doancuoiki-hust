import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DmDongHoService } from 'app/entities/dm-dong-ho/dm-dong-ho.service';
import { IDmDongHo, DmDongHo } from 'app/shared/model/dm-dong-ho.model';

describe('Service Tests', () => {
  describe('DmDongHo Service', () => {
    let injector: TestBed;
    let service: DmDongHoService;
    let httpMock: HttpTestingController;
    let elemDefault: IDmDongHo;
    let expectedResult: IDmDongHo | IDmDongHo[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(DmDongHoService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new DmDongHo(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a DmDongHo', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new DmDongHo()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a DmDongHo', () => {
        const returnedFromService = Object.assign(
          {
            hangSanXuat: 'BBBBBB',
            ten: 'BBBBBB',
            gia: 'BBBBBB',
            ngayNhap: 'BBBBBB',
            ngayXuat: 'BBBBBB',
            moTa: 'BBBBBB',
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

      it('should return a list of DmDongHo', () => {
        const returnedFromService = Object.assign(
          {
            hangSanXuat: 'BBBBBB',
            ten: 'BBBBBB',
            gia: 'BBBBBB',
            ngayNhap: 'BBBBBB',
            ngayXuat: 'BBBBBB',
            moTa: 'BBBBBB',
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

      it('should delete a DmDongHo', () => {
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
