import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IDmGioHang } from 'app/shared/model/dm-gio-hang.model';
import { IDmSanPham } from 'app/shared/model/dm-san-pham.model';

type EntityResponseType = HttpResponse<IDmGioHang>;
type EntityArrayResponseType = HttpResponse<IDmGioHang[]>;

@Injectable({ providedIn: 'root' })
export class DmGioHangService {
  public resourceUrl = SERVER_API_URL + 'api/dm-gio-hangs';

  constructor(protected http: HttpClient) {}

  create(dmGioHang: IDmGioHang): Observable<EntityResponseType> {
    return this.http.post<IDmGioHang>(this.resourceUrl, dmGioHang, { observe: 'response' });
  }

  update(dmGioHang: IDmGioHang): Observable<EntityResponseType> {
    return this.http.put<IDmGioHang>(this.resourceUrl, dmGioHang, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IDmGioHang>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDmGioHang[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addCart(product: any) {
    console.log(product);
    const options = createRequestOption(product);
    return this.http.get<IDmGioHang[]>(this.resourceUrl, { params: options, observe: 'response' });
  }
}
