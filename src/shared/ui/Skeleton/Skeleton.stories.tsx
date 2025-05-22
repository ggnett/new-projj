import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme/ThemeContext';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        width: 100,
        height: 100,
    },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [ThemeDecorator(Theme.NORMAL)];

export const LightCircle: Story = {};
LightCircle.decorators = [ThemeDecorator(Theme.NORMAL)];
LightCircle.args = {
    border: '50%',
};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkCircle: Story = {};
DarkCircle.decorators = [ThemeDecorator(Theme.DARK)];
DarkCircle.args = {
    border: '50%',
};
