import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { SearchComponent } from './search.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];

@NgModule({
  declarations: [SearchComponent],
  imports: [MatCardModule, CommonModule, RouterModule.forChild(ROUTES)]
})
export class SearchModule {}
