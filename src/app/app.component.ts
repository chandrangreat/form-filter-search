import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  searchText: string = '';
  filterForm!: FormGroup;
  selectedFilters: { id: number; name: string; checked: boolean }[] = [];
  filterData: { id: number; name: string; checked: boolean }[] = [
    {
      name: 'Iris',
      checked: false,
      id: 1,
    },
    {
      name: 'Barry',
      checked: false,
      id: 2,
    },
    {
      name: 'Cisco',
      checked: false,
      id: 3,
    },
    {
      name: 'Catelyn',
      checked: false,
      id: 4,
    },
    {
      name: 'Ronnie',
      checked: false,
      id: 5,
    },
    {
      name: 'Martin',
      checked: false,
      id: 6,
    },
    {
      name: 'Wally',
      checked: false,
      id: 7,
    },
    {
      name: 'Eobard',
      checked: false,
      id: 8,
    },
    {
      name: 'Frost',
      checked: false,
      id: 9,
    },
    {
      name: 'Patty',
      checked: false,
      id: 10,
    },
    {
      name: 'Jax',
      checked: false,
      id: 11,
    },
    {
      name: 'Oliver',
      checked: false,
      id: 12,
    },
    {
      name: 'Prince',
      checked: false,
      id: 13,
    },
    {
      name: 'Madara',
      checked: false,
      id: 14,
    },
    {
      name: 'Hashirama',
      checked: false,
      id: 15,
    },
    {
      name: 'Velociraptor',
      checked: false,
      id: 16,
    },
    {
      name: 'Steve Rogers',
      checked: false,
      id: 17,
    },
    {
      name: 'Tony Stark',
      checked: false,
      id: 18,
    },
    {
      name: 'Hal Jordan',
      checked: false,
      id: 19,
    },
    {
      name: 'Bruce Wayne',
      checked: false,
      id: 20,
    },
  ];

  ngOnInit() {
    this.filterForm = new FormGroup({
      filters: new FormArray([]),
    });

    this.filterData.forEach((item) => {
      this.filterFormArray.push(
        new FormGroup({
          name: new FormControl(item.name),
          checked: new FormControl(item.checked),
          id: new FormControl(item.id),
        })
      );
    });
  }

  get filterFormArray(): FormArray {
    return this.filterForm.get('filters') as FormArray;
  }

  resetFilters() {
    this.selectedFilters = [];
    this.filterFormArray.controls.map((filterFormGroup) => {
      // filterFormGroup.get('checked')?.reset();
      filterFormGroup.get('checked')?.setValue(false);
    });
  }

  applyFilters() {
    this.selectedFilters = this.filterForm.controls['filters'].value.filter(
      (item: { id: number; name: string; checked: boolean }) =>
        item.checked === true
    );
  }
}
