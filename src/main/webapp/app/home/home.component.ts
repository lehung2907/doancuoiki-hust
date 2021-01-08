import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

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

  account: Account | null = null;
  authSubscription?: Subscription;

  constructor(private accountService: AccountService, private loginModalService: LoginModalService, private _config: NgbCarouselConfig) {
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
  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }
}
