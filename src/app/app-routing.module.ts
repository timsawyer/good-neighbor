import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'detail',
    loadChildren: './routes/detail/detail.module#DetailModule'
  },
  {
    path: 'search',
    loadChildren: './routes/search/search.module#SearchModule'
  },
  {
    path: '',
    loadChildren: './routes/home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
