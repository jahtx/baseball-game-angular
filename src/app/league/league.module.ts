import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '@app/material.module';
import { LeagueRoutingModule } from './league-routing.module';
import { LeagueComponent } from './league.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, LeagueRoutingModule, NgxSpinnerModule],
  declarations: [LeagueComponent]
})
export class LeagueModule {}
