import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeagueService } from '../services/league.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { League } from '../interfaces/league';
import { NGXLogger } from 'ngx-logger';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ValidationMessages } from '../../data/constants';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-league-add',
  templateUrl: './league-add.component.html',
  styleUrls: ['./league-add.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class LeagueAddComponent implements OnInit {
  @Input() leagueForm: FormGroup;
  league: League;
  _id = '';
  validationMessages = ValidationMessages;
  isModified = false;

  isLoadingResults = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: LeagueService,
    private formBuilder: FormBuilder,
    private logger: NGXLogger
  ) {}

  ngOnInit() {
    this.leagueForm = this.formBuilder.group({
      leagueId: [''],
      leagueName: ['', [Validators.required, Validators.minLength(5)]],
      alias: [''],
      description: [''],
      mantra: [''],
      active: [''],
      zipCode: ['']
    });

    this.leagueForm.valueChanges.subscribe(changes => {
      this.isModified = true;
      console.log('is modified: ' + this.isModified);
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    // console.log('component.ts onFormSubmit form: ' + JSON.stringify(form));
    this.logger.debug('MORE TESTING');
    this.api.addLeague(form).subscribe(
      res => {
        const id = this._id;
        console.log('onFormSubmit id: ' + id);
        this.isLoadingResults = false;
        this.router.navigate(['/league/']);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
