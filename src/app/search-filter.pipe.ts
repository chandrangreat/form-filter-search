import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]) {
  //   return null;
  // }

  transform(items: any[], searchText: string) {
    let filteredItems: any[] = [];
    if (!items) {
      return [];
    }
    if (!searchText) {
      return [...items];
    }
    searchText = searchText.toLocaleLowerCase();
    filteredItems = items.filter((item) =>
      item.value.name.toLowerCase().includes(searchText)
    );
    return filteredItems;
  }
}
