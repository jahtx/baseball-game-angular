import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '@app/material.module';
import { LeagueDetailRoutingModule } from './league-detail-routing.module';
import { LeagueDetailComponent } from './league-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    LeagueDetailRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [LeagueDetailComponent]
})
export class LeagueDetailModule {}
