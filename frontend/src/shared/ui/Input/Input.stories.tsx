import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        className: {
            control: false,
            table: {
                disable: true
            }
        }
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {}
};

export const DefaultDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};