import { PAGE_SIZES } from '../../app.constants';

export interface IPagingModel {
  pageIndex: number;
  pageSize: number;
  pageSizes: number[];
  maxSize: number;
  totalItem: number;
  ellipses: boolean;
  sort?: string;
}

export class PagingModel implements IPagingModel {
  public pageIndex: number;
  public pageSize: number;
  public pageSizes: number[];
  public maxSize: number;
  public totalItem: number;
  public ellipses: boolean;
  constructor(public sort?: string) {
    this.pageIndex = 1;
    this.pageSize = PAGE_SIZES[0];
    this.pageSizes = PAGE_SIZES;
    this.maxSize = 5;
    this.totalItem = 0;
    this.ellipses = false;
  }

  changeToEllipses(): PagingModel {
    this.maxSize = 3;
    this.ellipses = true;
    return this;
  }

  getPageSearchObj(searchParams: object): object {
    const search = {
      page: this.pageIndex - 1,
      size: this.pageSize,
    };
    if (searchParams) {
      Object.keys(searchParams).forEach(key => {
        if (key !== 'sort') {
          if (searchParams[key] !== undefined && searchParams[key] !== null) {
            search[key] = searchParams[key];
          }
        }
      });
    }
    return search;
  }
}
