import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    backgroundColor: "black",
    size: "small",
    label: 'Button-Primary',
  },
};

export const Secondary: Story = {
  args: {
    primary: true,
    backgroundColor: "violet",
    size: "medium",
    label: 'Button-Secondary',
  },
};


