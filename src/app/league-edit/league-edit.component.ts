import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeagueService } from '../services/league.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { NgxSpinnerService } from 'ngx-spinner';
import { League } from '../interfaces/league';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ValidationMessages } from '../../data/constants';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-league-edit',
  templateUrl: './league-edit.component.html',
  styleUrls: ['./league-edit.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class LeagueEditComponent implements OnInit {
  leagueForm: FormGroup;
  league: League;
  _id = '';
  isLoaded = false;
  validationMessages = ValidationMessages;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: LeagueService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private logger: NGXLogger
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.getLeague(this.route.snapshot.params.id);

    this.leagueForm = this.formBuilder.group({
      leagueId: [''],
      leagueName: ['', [Validators.required, Validators.minLength(5)]],
      alias: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      mantra: [''],
      active: [''],
      zipCode: ['']
    });
  }

  getLeague(id: number) {
    this.api.getLeague(id).subscribe(
      data => {
        this._id = data.leagueId;
        this.league = data;
        this.spinner.hide();
        this.isLoaded = true;
        this.leagueForm.setValue(
          {
            leagueId: this.league.leagueId,
            leagueName: this.league.leagueName,
            alias: this.league.alias,
            description: this.league.description,
            mantra: this.league.mantra,
            active: this.league.active,
            zipCode: this.league.zipCode
          },
          { emitEvent: false }
        );
      },
      err => {
        console.warn(err);
      }
    );
  }

  deleteLeague(id: number) {
    this.api.deleteLeague(id).subscribe(
      res => {
        this.router.navigate(['/league']);
      },
      err => {
        this.logger.warn('what? ' + err);
      }
    );
  }

  onFormSubmit(form: NgForm) {
    this.logger.log('onFormSubmit fired');
    if (this.leagueForm.invalid) {
      this.logger.warn('form invalid');
      return;
    }
    this.api.updateLeague(this._id, form).subscribe(
      res => {
        const id = this._id;
        this.logger.log('onFormSubmit id: ' + id);
        this.router.navigate(['/league-detail/', id]);
      },
      err => {
        this.logger.warn(err);
      }
    );
  }
}
