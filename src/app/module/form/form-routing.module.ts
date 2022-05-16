import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './answer/answer.component';
import { BuilderComponent } from './builder/builder.component';

const routes: Routes = [
  { path: "builder", component: BuilderComponent },
  { path: "answers", component: AnswerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
