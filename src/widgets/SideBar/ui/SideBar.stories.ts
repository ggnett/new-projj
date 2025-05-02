import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme/ThemeContext';
import Sidebar from './SideBar';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [
    ThemeDecorator(Theme.NORMAL),
];

export const Dark: Story = {
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];
