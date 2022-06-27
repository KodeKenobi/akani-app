import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeResultsPageRoutingModule } from './home-results-routing.module';

import { HomeResultsPage } from './home-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeResultsPageRoutingModule
  ],
  declarations: [HomeResultsPage]
})
export class HomeResultsPageModule {}
