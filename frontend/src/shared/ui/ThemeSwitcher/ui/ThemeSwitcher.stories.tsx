import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {

};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};