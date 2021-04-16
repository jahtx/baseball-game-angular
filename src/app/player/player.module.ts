import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '@app/material.module';
import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, PlayerRoutingModule, NgxSpinnerModule],
  declarations: [PlayerComponent]
})
export class PlayerModule {}
