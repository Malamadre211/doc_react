import type { Meta, StoryObj } from '@storybook/react';

import Text  from '../Text';

const meta: Meta<typeof Text> = {
    title: 'Component/Text',
    component: Text,
    parameters: {
      layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
      color: { control: 'color' },
    },
  } satisfies Meta<typeof Text>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {
      text: 'H1',
      color: 'black',
      size: '28px',
      weight: 'bold',
    },
  };
