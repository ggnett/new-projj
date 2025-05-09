/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/theme/ThemeContext';
import Modal from './Modal';

const meta = {
    title: 'widgets/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children: <p>asasdasda</p>,
        isOpen: true,
        themes: '',
        setOpen: fn(),
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [ThemeDecorator(Theme.NORMAL)];
Light.args = {
    children: <p>light</p>,
};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
    children: <p>Dark</p>,
};
