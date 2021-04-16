import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '@app/material.module';
import { PlayerEditRoutingModule } from './player-edit-routing.module';
import { PlayerEditComponent } from './player-edit.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    PlayerEditRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  declarations: [PlayerEditComponent]
})
export class PlayerEditModule {}
