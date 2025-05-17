import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme/ThemeContext';
import Select from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        label: 'test',
        options: [
            {
                value: '123',
                content: '1st punkt',
            },
            {
                value: '1234',
                content: '2nd punkt',
            },
        ],
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [ThemeDecorator(Theme.NORMAL)];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
