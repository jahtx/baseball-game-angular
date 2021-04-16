import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '@app/material.module';
import { PlayerDetailRoutingModule } from './player-detail-routing.module';
import { PlayerDetailComponent } from './player-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    PlayerDetailRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [PlayerDetailComponent]
})
export class PlayerDetailModule {}
