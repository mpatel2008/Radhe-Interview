import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [{
  path:'home',
  component:DashboardComponent
},
{
  path:'questions',
  component:QuestionsComponent
},

{
  path:'**',
  component:NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
