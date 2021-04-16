import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { LeagueAddRoutingModule } from './league-add-routing.module';
import { LeagueAddComponent } from './league-add.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    LeagueAddRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LeagueAddComponent]
})
export class LeagueAddModule {}
