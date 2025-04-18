import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};
