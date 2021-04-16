import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeagueService } from '../services/league.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { League } from '../interfaces/league';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.scss']
})
export class LeagueDetailComponent implements OnInit {
  league: League = {
    _id: '',
    leagueId: '',
    leagueName: '',
    description: '',
    alias: '',
    active: true,
    mantra: '',
    zipCode: '',
    modifiedDate: null,
    createdDate: null
  };
  isLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private api: LeagueService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private logger: NGXLogger
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.getLeagueDetails(this.route.snapshot.params.id);
  }

  getLeagueDetails(id: number) {
    this.api.getLeague(id).subscribe(
      data => {
        this.league = data;
        this.spinner.hide();
        this.isLoaded = true;
      },
      err => {
        this.logger.log(err);
      }
    );
  }

  deleteLeague(id: number) {
    this.api.deleteLeague(id).subscribe(
      res => {
        this.router.navigate(['/league']);
      },
      err => {
        this.logger.log('what? ' + err);
      }
    );
  }
}
