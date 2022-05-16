import { Pipe, PipeTransform } from '@angular/core';
import { Answer } from '../interface/question';

@Pipe({
    name: 'checkedAnswer',
    pure: false
})
export class QuestionFilterPipe implements PipeTransform {
    transform(items: Answer[]): any {
        if (!items)  {
            return items;
        }
        return items.filter(item => item.isChecked === true);
    }
}