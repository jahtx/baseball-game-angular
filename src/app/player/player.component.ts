import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Player } from '../interfaces/player';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  data: Player[] = [];
  isLoaded = false;

  subscription: Subscription;

  constructor(private api: PlayerService, private spinner: NgxSpinnerService, private logger: NGXLogger) {}

  ngOnInit() {
    this.spinner.show();
    this.logger.log('player.components init');
    this.api.getPlayers().subscribe(
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
