import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { BuilderComponent } from './builder/builder.component';
import { AnswerComponent } from './answer/answer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizService } from './services/quiz.service';
import { BootstrapModalModule, DialogService } from 'ngx-bs-modal';
import { AddQuestionDialogComponent } from './add-question-dialog/add-question-dialog.component';
import { QuestionFilterPipe } from './pipe/question.filter.pipe';


@NgModule({
  declarations: [
    BuilderComponent,
    AnswerComponent,
    AddQuestionDialogComponent,
    QuestionFilterPipe
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModalModule
  ],
  providers: [
    QuizService,
    DialogService  
  ]
})
export class FormModule { }
