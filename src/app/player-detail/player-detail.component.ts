import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Player } from '../interfaces/player';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
  player: Player = {
    _id: '',
    playerId: '',
    username: '',
    firstName: '',
    lastName: '',
    favoriteTeam: '',
    hatedTeam: '',
    atBatSong: '',
    dateOfBirth: null,
    email: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    modifiedDate: null,
    createdDate: null
  };
  isLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private api: PlayerService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private logger: NGXLogger
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.getPlayerDetails(this.route.snapshot.params.id);
  }

  getPlayerDetails(id: number) {
    this.api.getPlayer(id).subscribe(
      data => {
        this.player = data;
        this.spinner.hide();
        this.isLoaded = true;
      },
      err => {
        this.logger.log(err);
      }
    );
  }

  deletePlayer(id: number) {
    this.api.deletePlayer(id).subscribe(
      res => {
        this.router.navigate(['/player']);
      },
      err => {
        this.logger.log('what? ' + err);
      }
    );
  }
}
