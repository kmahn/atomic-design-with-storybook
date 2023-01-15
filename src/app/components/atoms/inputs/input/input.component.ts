import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `<input [type]="type" #input [value]="value" (change)="value = input.value" class="px-4 py-2 border border-gray-300"/>`
})
export class InputComponent {
  @Input() type: 'text' | 'password' = 'text';
  value = '';
}
