import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent, InputComponent } from '../../atoms';
import { LabelComponent } from '../../atoms/labels';
import { SearcherComponent } from './searcher.component';

export default {
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, InputComponent, LabelComponent],
      imports: [CommonModule],
    })
  ],
  title: 'Molecules/Searcher',
  component: SearcherComponent,
  argTypes: {
    keywordChange: { action: 'keywordChange' }
  }
} as Meta;

const DefaultTemplate: Story = (args) => {
  return {
    props: args,
  };
};
export const Default = DefaultTemplate.bind({});
Default.args = {};
