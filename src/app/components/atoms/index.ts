import { ButtonComponents } from './buttons';
import { InputComponents } from './inputs';
import { LabelComponents } from './labels';

export * from './buttons';
export * from './inputs';

export const AtomComponents = [
  ...ButtonComponents,
  ...InputComponents,
  ...LabelComponents,
];
