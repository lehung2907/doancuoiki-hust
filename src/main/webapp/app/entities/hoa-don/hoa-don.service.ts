import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IHoaDon } from 'app/shared/model/hoa-don.model';

type EntityResponseType = HttpResponse<IHoaDon>;
type EntityArrayResponseType = HttpResponse<IHoaDon[]>;

@Injectable({ providedIn: 'root' })
export class HoaDonService {
  public resourceUrl = SERVER_API_URL + 'api/hoa-dons';

  constructor(protected http: HttpClient) {}

  create(hoaDon: IHoaDon): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(hoaDon);
    return this.http
      .post<IHoaDon>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(hoaDon: IHoaDon): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(hoaDon);
    return this.http
      .put<IHoaDon>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IHoaDon>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IHoaDon[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(hoaDon: IHoaDon): IHoaDon {
    const copy: IHoaDon = Object.assign({}, hoaDon, {
      ngayLap: hoaDon.ngayLap && hoaDon.ngayLap.isValid() ? hoaDon.ngayLap.format(DATE_FORMAT) : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.ngayLap = res.body.ngayLap ? moment(res.body.ngayLap) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((hoaDon: IHoaDon) => {
        hoaDon.ngayLap = hoaDon.ngayLap ? moment(hoaDon.ngayLap) : undefined;
      });
    }
    return res;
  }
}
