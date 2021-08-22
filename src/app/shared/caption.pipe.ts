import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caption'
})
export class CaptionPipe implements PipeTransform {

  transform(value: string): any {
      return value.slice(0, 130) + ' ...';
  }

}
