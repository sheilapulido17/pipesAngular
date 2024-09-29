import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextListComponent } from './text-list/text-list.component';

const routes: Routes = [
  {path: 'text-list', component: TextListComponent},
  {path: '', redirectTo: '/text-list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
