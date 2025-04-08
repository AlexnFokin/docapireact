import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Loader from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
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
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
    args: {}
};

export const DefaultDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};