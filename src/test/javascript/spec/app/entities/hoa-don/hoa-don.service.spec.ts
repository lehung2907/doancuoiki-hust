import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { HoaDonService } from 'app/entities/hoa-don/hoa-don.service';
import { IHoaDon, HoaDon } from 'app/shared/model/hoa-don.model';

describe('Service Tests', () => {
  describe('HoaDon Service', () => {
    let injector: TestBed;
    let service: HoaDonService;
    let httpMock: HttpTestingController;
    let elemDefault: IHoaDon;
    let expectedResult: IHoaDon | IHoaDon[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(HoaDonService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new HoaDon(
        0,
        'AAAAAAA',
        0,
        0,
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        'AAAAAAA'
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            ngayLap: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a HoaDon', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            ngayLap: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            ngayLap: currentDate,
          },
          returnedFromService
        );

        service.create(new HoaDon()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a HoaDon', () => {
        const returnedFromService = Object.assign(
          {
            login: 'BBBBBB',
            dmSanPhamId: 1,
            soLuong: 1,
            gia: 1,
            ten: 'BBBBBB',
            diaChi: 'BBBBBB',
            soDienThoai: 'BBBBBB',
            email: 'BBBBBB',
            trangThai: 'BBBBBB',
            ghiChu: 'BBBBBB',
            ngayLap: currentDate.format(DATE_FORMAT),
            trangThai2: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            ngayLap: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of HoaDon', () => {
        const returnedFromService = Object.assign(
          {
            login: 'BBBBBB',
            dmSanPhamId: 1,
            soLuong: 1,
            gia: 1,
            ten: 'BBBBBB',
            diaChi: 'BBBBBB',
            soDienThoai: 'BBBBBB',
            email: 'BBBBBB',
            trangThai: 'BBBBBB',
            ghiChu: 'BBBBBB',
            ngayLap: currentDate.format(DATE_FORMAT),
            trangThai2: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            ngayLap: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a HoaDon', () => {
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
