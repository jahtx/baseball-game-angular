import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Player } from '../interfaces/player';
import { NGXLogger } from 'ngx-logger';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { TeamNames } from '../../data/constants';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class PlayerAddComponent implements OnInit {
  playerForm: FormGroup;
  player: Player;
  _id = '';
  teamNames: any = TeamNames;

  isModified = false;

  isLoadingResults = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: PlayerService,
    private formBuilder: FormBuilder,
    private logger: NGXLogger
  ) {}

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      playerId: [''],
      username: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
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

    this.playerForm.valueChanges.subscribe(changes => {
      this.isModified = true;
      console.log('is modified: ' + this.isModified);
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    // console.log('component.ts onFormSubmit form: ' + JSON.stringify(form));
    this.logger.debug('MORE TESTING');
    this.api.addPlayer(form).subscribe(
      res => {
        const id = this._id;
        console.log('onFormSubmit id: ' + id);
        this.isLoadingResults = false;
        this.router.navigate(['/player/']);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
