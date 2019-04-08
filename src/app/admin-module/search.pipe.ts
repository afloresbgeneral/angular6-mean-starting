import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, term: string): any {
    console.log('filter', term);

    if (term === undefined) {
      console.log('undefined');
      return items;
    }
     return items.filter(function(item) {
      return item.name.toLowerCase().includes(term.toLowerCase());
     });
  }

}
