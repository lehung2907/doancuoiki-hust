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

  constructor(
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private _config: NgbCarouselConfig,
    protected dmSanPhamService: DmSanPhamService,
    protected dataUtils: JhiDataUtils,
    protected dmGioHangService: DmGioHangService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {
    _config.interval = 3000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;
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
    this.dmSanPhamService.query().subscribe((res: HttpResponse<IDmSanPham[]>) => (this.dmSanPhams = res.body || []));
  }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.loadAll();
  }

  trackId(index: number, item: IDmSanPham): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  openFile(contentType = '', base64String: string): void {
    return this.dataUtils.openFile(contentType, base64String);
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  addToCart(req: any): void {
    this.dmGioHangService.addCart(req);
  }
}
