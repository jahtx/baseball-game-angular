import { Component, OnInit, OnDestroy } from '@angular/core';
import { LeagueService } from '../services/league.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { League } from '../interfaces/league';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  data: League[] = [];
  isLoaded = false;

  subscription: Subscription;

  constructor(private api: LeagueService, private spinner: NgxSpinnerService, private logger: NGXLogger) {}

  ngOnInit() {
    this.spinner.show();
    this.logger.log('league.components init');
    this.api.getLeagues().subscribe(
      res => {
        this.data = res;
        this.spinner.hide();
        this.isLoaded = true;
      },
      err => {
        console.log(err);
      }
    );
  }
}
