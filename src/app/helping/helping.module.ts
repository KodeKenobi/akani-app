import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpingPageRoutingModule } from './helping-routing.module';

import { HelpingPage } from './helping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpingPageRoutingModule
  ],
  declarations: [HelpingPage]
})
export class HelpingPageModule {}
