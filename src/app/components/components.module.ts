import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtomComponents } from './atoms';
import { MoleculeComponents } from './molecules';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ...AtomComponents,
    ...MoleculeComponents,
  ],
  exports: [
    ...AtomComponents,
    ...MoleculeComponents,
  ]
})
export class ComponentsModule {
}
