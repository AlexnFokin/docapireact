import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton } from './Button';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        theme: {
            control: 'select',
            options: Object.values(ThemeButton),
        },
        children: {
            control: 'text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const Error: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.ERROR
    },
};

export const ErrorDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.ERROR
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}