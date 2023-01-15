import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searcher',
  template: `
    <div class="flex gap-2 items-center">
      <app-label>상품 검색</app-label>
      <app-input #input></app-input>
      <app-button (click)="emitKeyword(input.value)">검색</app-button>
    </div>`
})
export class SearcherComponent {
  @Output() keywordChange: EventEmitter<string> = new EventEmitter<string>();

  emitKeyword(value: string) {
    console.log(value);
    this.keywordChange.emit(value);
  }
}
