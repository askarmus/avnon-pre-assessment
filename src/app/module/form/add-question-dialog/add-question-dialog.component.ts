import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogComponent, DialogService } from 'ngx-bs-modal';
import { QuestionType } from '../enum/question.type.enum';
import { Question } from '../interface/question';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-add-question-dialog',
  templateUrl: './add-question-dialog.component.html',
  styleUrls: ['./add-question-dialog.component.css']
})
export class AddQuestionDialogComponent extends DialogComponent<null, boolean> implements OnInit {
  questionTypeEnum = QuestionType; 
  formGroup!: FormGroup;
  answers!: FormArray;
  questionTypes: any =  [this.questionTypeEnum.Checkbox, this.questionTypeEnum.Paragraph];
  questions: Question[] = [];

  constructor(
    private fb: FormBuilder,
    private quizService: QuizService,
    dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
    this.initform();
    this.quizService.getAnswers()
      .subscribe({
        next: (res: Question[]) => {
          this.questions = res;
        }
      });
  }

  initform() {
    this.formGroup = this.fb.group({
      questionType: [this.questionTypeEnum.Checkbox.toString(), [Validators.required]],
      questionName: ['', Validators.required],
      answers: this.fb.array([this.createItem()])
    });
  }

  showConfirm() {
    this.dialogService.addDialog(AddQuestionDialogComponent);
  }

  get f() {
    return this.formGroup.controls;
  }

  createItem() {
    return this.fb.group({ name: ['',Validators.required] });
  }

  createOther() {
    this.answers = this.f['answers'] as FormArray;
    this.answers.push(this.fb.group({ name: ['Other'] }));
  }

  addItem() {
    this.answers = this.f['answers'] as FormArray;
    this.answers.push(this.createItem());
  }


  onQuestionTypeChange(type: string) {
    //Shoud refector here
    if (type.split(':')[1].trim() === this.questionTypeEnum.Paragraph) {
      (this.f['answers'] as FormArray).removeAt(0);
    } else {
      this.addItem();
    }
  }

  addQuestion() {
    if (this.formGroup.value.questionType == this.questionTypeEnum.Checkbox)
      this.createOther();

    const question: Question = this.formGroup.value;

    this.questions.push(question);
    this.quizService.setAnswer(this.questions);
    this.formGroup.reset();
    this.close();
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
       this.addQuestion();
    }
  }
}
