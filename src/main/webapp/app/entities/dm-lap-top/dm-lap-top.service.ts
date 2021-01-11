import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IDmDienThoai } from 'app/shared/model/dm-dien-thoai.model';

type EntityResponseType = HttpResponse<IDmDienThoai>;
type EntityArrayResponseType = HttpResponse<IDmDienThoai[]>;

@Injectable({ providedIn: 'root' })
export class DmLapTopService {
  public resourceUrl = SERVER_API_URL + 'api/dm-dien-thoais';

  constructor(protected http: HttpClient) {}

  create(dmDienThoai: IDmDienThoai): Observable<EntityResponseType> {
    return this.http.post<IDmDienThoai>(this.resourceUrl, dmDienThoai, { observe: 'response' });
  }

  update(dmDienThoai: IDmDienThoai): Observable<EntityResponseType> {
    return this.http.put<IDmDienThoai>(this.resourceUrl, dmDienThoai, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IDmDienThoai>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDmDienThoai[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
