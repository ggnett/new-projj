import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme/ThemeContext';
import Avatar from './Avatar';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        alt: 'avatar',
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {};
Big.args = {
    size: 200,
};

export const Small: Story = {};
Small.args = {
    size: 100,
};
