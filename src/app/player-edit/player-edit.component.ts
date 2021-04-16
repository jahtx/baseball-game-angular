import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { Player } from '../interfaces/player';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { TeamNames, ValidationMessages } from '../../data/constants';

import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class PlayerEditComponent implements OnInit {
  playerForm: FormGroup;
  player: Player;
  _id = '';
  isLoaded = false;
  teamNames: any = TeamNames;
  validationMessages = ValidationMessages;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: PlayerService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private logger: NGXLogger
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.getPlayer(this.route.snapshot.params.id);

    this.playerForm = this.formBuilder.group({
      playerId: [''],
      username: ['', [Validators.required, Validators.minLength(5)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      favoriteTeam: [''],
      hatedTeam: [''],
      atBatSong: [''],
      dateOfBirth: [''],
      modifiedDate: [''],
      createdDate: [''],
      city: [''],
      state: [''],
      country: [''],
      zipCode: ['']
    });

    this.playerForm.valueChanges.subscribe(changes => console.log('com on!'));
  }

  getPlayer(id: number) {
    this.api.getPlayer(id).subscribe(
      data => {
        this._id = data.playerId;
        this.player = data;
        this.spinner.hide();
        this.isLoaded = true;
        this.playerForm.setValue(
          {
            playerId: this.player.playerId,
            username: this.player.username,
            firstName: this.player.firstName,
            lastName: this.player.lastName,
            dateOfBirth: this.player.dateOfBirth,
            email: this.player.email,
            favoriteTeam: this.player.favoriteTeam,
            hatedTeam: this.player.hatedTeam,
            atBatSong: this.player.atBatSong,
            modifiedDate: this.player.modifiedDate,
            createdDate: this.player.createdDate,
            city: this.player.city,
            state: this.player.state,
            country: this.player.country,
            zipCode: this.player.zipCode
          },
          { emitEvent: false }
        );
      },
      err => {
        console.warn(err);
      }
    );
  }

  deletePlayer(id: number) {
    this.api.deletePlayer(id).subscribe(
      res => {
        this.router.navigate(['/player']);
      },
      err => {
        this.logger.warn('what? ' + err);
      }
    );
  }

  onFormSubmit(form: NgForm) {
    this.logger.log('onFormSubmit fired');
    if (this.playerForm.invalid) {
      this.logger.warn('form invalid');
      return;
    }
    this.api.updatePlayer(this._id, form).subscribe(
      res => {
        const id = this._id;
        this.logger.log('onFormSubmit id: ' + id);
        this.router.navigate(['/player-detail/', id]);
      },
      err => {
        this.logger.warn(err);
      }
    );
  }
}
