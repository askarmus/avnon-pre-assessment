import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { QuestionType } from '../enum/question.type.enum';
import { Question } from '../interface/question';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  questions : Question[] = [];
  questionTypeEnum = QuestionType; 

  constructor(private _quizService: QuizService) { }

  ngOnInit() {
    this._quizService.getAnswers()
      .pipe(first())
      .subscribe({
        next: (res: Question[]) => {
          this.questions = res;
        }
      });
  }
}
