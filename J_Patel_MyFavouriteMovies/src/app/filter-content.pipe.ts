import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';
@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contents: Content[], filterContent: string): Content[] {
    if (!filterContent) {
      return contents.filter(content => !content.type);
    }

    return contents.filter(content => content.type === filterContent);
  }
}
