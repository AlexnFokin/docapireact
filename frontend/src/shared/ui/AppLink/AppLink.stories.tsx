import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'App Link Text',
        theme: AppLinkTheme.PRIMARY
    },
    argTypes: {
        to: {
            description: 'link text',
            control: 'text'
        },
        children: {
            description: 'link',
            control: 'text'
        },
        className: {
            control: false,
            table: {
                disable: true
            }
        },
        theme: {
            description: 'link theme',
            options: Object.values(AppLinkTheme),
            control: {
                type: 'radio',
                labels: {
                    [AppLinkTheme.PRIMARY]: 'Primary',
                    [AppLinkTheme.SECONDARY]: 'Secondary'
                }
            }
        }
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    }
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    }
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};