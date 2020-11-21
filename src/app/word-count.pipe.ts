import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readTime'
})
export class WordCountPipe implements PipeTransform {

  transform(value: any): string {
    const wordsPerMinute = 200;
    const noOfWords = value;
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    console.log(readTime);
    return `${readTime} minute read`;
  }

}
