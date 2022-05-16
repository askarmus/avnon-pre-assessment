export interface Answer {
    name: string;
    isChecked: boolean;
    otherAnswer : string;
}

export interface Question {
    questionType: string;
    questionName: string;
    pragraphAnswers : string;
    answers: Answer[];
}
