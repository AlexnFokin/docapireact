import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePagePage from './ProfilePagePage';

const meta: Meta<typeof ProfilePagePage> = {
    title: 'shared/ProfilePagePage',
    component: ProfilePagePage,
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
type Story = StoryObj<typeof ProfilePagePage>;

export const Default: Story = {
    args: {}
};

export const DefaultDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};