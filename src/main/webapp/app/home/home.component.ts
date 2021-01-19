import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { NgbActiveModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DmSanPhamService } from 'app/entities/dm-san-pham/dm-san-pham.service';
import { IDmSanPham } from 'app/shared/model/dm-san-pham.model';
import { HttpResponse } from '@angular/common/http';
import { JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { DmGioHangService } from 'app/entities/dm-gio-hang/dm-gio-hang.service';
import { ActivatedRoute } from '@angular/router';
import { PagingModel } from 'app/shared/util/paging.model';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  peliculas: any[] = [
    {
      name: '',
      img: 'content/assets/baner/wall1.png',
      desc: '',
    },
    {
      name: '',
      img: 'content/assets/baner/wall2.png',
      desc: '',
    },
    {
      name: '',
      img: 'content/assets/baner/wall3.png',
      desc: '',
    },
    {
      name: '',
      img: 'content/assets/baner/wall4.png',
      desc: '',
    },
    {
      name: '',
      img: 'content/assets/baner/wall5.png',
      desc: '',
    },
  ];
  dmSanPhams?: IDmSanPham[];

  account: Account | null = null;
  authSubscription?: Subscription;
  req: any;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  searchKey?: any;
  paging = new PagingModel();
  itemSearch?: any;

  constructor(
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private _config: NgbCarouselConfig,
    protected dmSanPhamService: DmSanPhamService,
    protected dataUtils: JhiDataUtils,
    protected dmGioHangService: DmGioHangService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager,
    private router: ActivatedRoute
  ) {
    _config.interval = 3000;
    _config.showNavigationArrows = true;
    _config.showNavigationIndicators = true;
    this.searchKey = {
      ten: undefined,
      page: this.paging.pageIndex,
      size: this.paging.pageSize,
    };
    this.itemSearch = {
      page: this.paging.pageIndex,
      size: this.paging.pageSize,
    };
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  loadAll(): void {
    this.dmSanPhamService.queryPageig(this.itemSearch).subscribe(
      (res: HttpResponse<Array<any>>) => {
        if (res.body) {
          this.dmSanPhams = res.body || [];
          if (res.headers) {
            this.paging.totalItem = Number(res.headers.get('X-Total-Count'));
          } else {
            this.paging.totalItem = 0;
          }
        } else {
          this.paging.totalItem = 0;
          this.dmSanPhams = [];
        }
      },
      () => {
        this.paging.totalItem = 0;
        this.dmSanPhams = [];
      }
    );
  }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.loadAll();
    this.router.queryParams.subscribe(params => {
      this.searchKey = {
        key: params['q'],
      };
      // this.dmSanPhamService.queryKey(this.searchKey).subscribe((res: HttpResponse<IDmSanPham[]>) => (this.dmSanPhams = res.body || []));
      // this.loadSearch(this.searchKey);
      this.dmSanPhamService.queryKey(this.searchKey).subscribe(
        (res: HttpResponse<Array<any>>) => {
          if (res.body) {
            this.dmSanPhams = res.body || [];
            if (res.headers) {
              this.paging.totalItem = Number(res.headers.get('X-Total-Count'));
            } else {
              this.paging.totalItem = 0;
            }
          } else {
            this.paging.totalItem = 0;
            this.dmSanPhams = [];
          }
        },
        () => {
          this.paging.totalItem = 0;
          this.dmSanPhams = [];
        }
      );
    });
  }

  trackId(index: number, item: IDmSanPham): number {
    return item.id!;
  }

  openFile(contentType = '', base64String: string): void {
    return this.dataUtils.openFile(contentType, base64String);
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }
}
