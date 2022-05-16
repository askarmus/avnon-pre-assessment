import { Component } from '@angular/core';
import { DialogService } from 'ngx-bs-modal';
import { AddQuestionDialogComponent } from '../add-question-dialog/add-question-dialog.component';
import { QuestionType } from '../enum/question.type.enum';
import { Question } from '../interface/question';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent  {

  questions: Question[] = [];
  questionTypeEnum = QuestionType; 

  constructor(
    private dialogService: DialogService,
    private _quizService: QuizService,
  ) { 
    this._quizService.getAnswers()
    .subscribe({
      next: (res: Question[]) => {
        this.questions = res;
      }
    });
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  showConfirm() {
    this.dialogService.addDialog(AddQuestionDialogComponent)
  }

}
