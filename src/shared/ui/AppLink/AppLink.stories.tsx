/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme/ThemeContext';
import AppLink, { themes } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children: <p>light</p>,
        to: '/',
        theme: themes.PRIMARY,
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [ThemeDecorator(Theme.NORMAL)];
Light.args = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
    theme: themes.SECONDARY,
};
