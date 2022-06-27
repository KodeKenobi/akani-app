import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeResultsPage } from './home-results.page';

const routes: Routes = [
  {
    path: '',
    component: HomeResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeResultsPageRoutingModule {}
