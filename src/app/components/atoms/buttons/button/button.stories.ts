import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  argTypes: { onClick: { action: 'click' } },
} as Meta;

const DefaultTemplate: Story = (args) => ({
  props: args,
  template: '<app-button>Default</app-button>'
});
export const DefaultButton = DefaultTemplate.bind({});
DefaultButton.args = {};

const SecondaryTemplate: Story = (args) => ({
  props: args,
  template: '<app-button styleClass="secondary">Secondary</app-button>'
});
export const SecondaryButton = SecondaryTemplate.bind({});
SecondaryButton.args = {};

const ClickTemplate: Story = (args) => ({
  props: args,
  template: '<app-button (click)="onClick($event)">Click Me</app-button>'
});
export const ClickButton = ClickTemplate.bind({});
ClickButton.args = {};
