import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { LeagueEditRoutingModule } from './league-edit-routing.module';
import { LeagueEditComponent } from './league-edit.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    LeagueEditRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  declarations: [LeagueEditComponent]
})
export class LeagueEditModule {}
