import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from '../interface/question';
 
@Injectable()
export class QuizService {
    private subject = new BehaviorSubject<Question[]>([]);

    setAnswer(questions : Question[]) {
        this.subject.next(questions);
    }

    getAnswers(): Observable<Question[]> {
        return this.subject.asObservable();
    }
}