import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IDmSanPham } from 'app/shared/model/dm-san-pham.model';

type EntityResponseType = HttpResponse<IDmSanPham>;
type EntityArrayResponseType = HttpResponse<IDmSanPham[]>;

@Injectable({ providedIn: 'root' })
export class DmSanPhamService {
  public resourceUrl = SERVER_API_URL + 'api/dm-san-phams';

  constructor(protected http: HttpClient) {}

  create(dmSanPham: IDmSanPham): Observable<EntityResponseType> {
    return this.http.post<IDmSanPham>(this.resourceUrl, dmSanPham, { observe: 'response' });
  }

  update(dmSanPham: IDmSanPham): Observable<EntityResponseType> {
    return this.http.put<IDmSanPham>(this.resourceUrl, dmSanPham, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IDmSanPham>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  queryPageig(req?: any): Observable<EntityArrayResponseType> {
    return this.http.get<Array<any>>(`${this.resourceUrl}/queryPageig`, { params: req, observe: 'response' });
  }

  queryKey(req: any): Observable<EntityArrayResponseType> {
    return this.http.get<IDmSanPham[]>(`${this.resourceUrl}/keys`, { params: req, observe: 'response' });
  }

  queryAllDienThoai(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDmSanPham[]>(`${this.resourceUrl}/dienthoais`, { params: options, observe: 'response' });
  }

  queryAllLapTop(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDmSanPham[]>(`${this.resourceUrl}/laptops`, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
