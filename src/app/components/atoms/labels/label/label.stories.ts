import { Meta, Story } from '@storybook/angular';
import { LabelComponent } from './label.component';

export default {
  title: 'Atoms/Label',
  component: LabelComponent
} as Meta;

const DefaultTemplate: Story = (args) => ({
  props: args,
  template: '<app-label>This is Label</app-label>'
});
export const DefaultLabel = DefaultTemplate.bind({});
DefaultLabel.args = {};
