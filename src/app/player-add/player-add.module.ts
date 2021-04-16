import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { PlayerAddRoutingModule } from './player-add-routing.module';
import { PlayerAddComponent } from './player-add.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    PlayerAddRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PlayerAddComponent]
})
export class PlayerAddModule {}
