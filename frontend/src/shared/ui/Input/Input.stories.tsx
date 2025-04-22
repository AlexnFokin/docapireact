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
        },
        value: {
            control: 'text'
        },
        placeholder: {
            control: 'text',
            defaultValue: 'Input'
        },
        type: {
            control: 'select',
            options: ['text', 'password', 'email', 'number'],
            defaultValue: 'text'
        },
        disabled: {
            control: 'boolean'
        },
        onChange: {
            action: 'changed'
        }
    },
    args: {
        placeholder: 'Enter text...',
        type: 'text'
    }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        value: 'Sample text'
    }
};

export const Empty: Story = {
    args: {
        value: ''
    }
};

export const WithPlaceholder: Story = {
    args: {
        value: '',
        placeholder: 'Example: 12345'
    }
};

export const Password: Story = {
    args: {
        type: 'password',
        placeholder: 'Enter password',
        value: 'secret123'
    }
};

export const Disabled: Story = {
    args: {
        value: 'Disabled field',
        disabled: true
    }
};

export const ErrorState: Story = {
    args: {
        value: 'Invalid value',
        className: 'error'
    }
};

export const PrimaryDark: Story = {
    args: {
        ...Primary.args
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PasswordDark: Story = {
    args: {
        ...Password.args
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const DisabledDark: Story = {
    args: {
        ...Disabled.args
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};