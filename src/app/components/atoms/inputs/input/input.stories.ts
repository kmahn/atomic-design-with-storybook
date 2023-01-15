import { Meta, Story } from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'Atoms/Input',
  component: InputComponent
} as Meta;

const DefaultTemplate: Story = (args) => ({
  props: args,
  template: '<app-input></app-input>'
});
export const DefaultInput = DefaultTemplate.bind({});
DefaultInput.args = {};

const PasswordTemplate: Story = (args) => ({
  prop: args,
  template: '<app-input type="password"></app-input>'
});
export const PasswordInput = PasswordTemplate.bind({});
PasswordInput.args = {};
