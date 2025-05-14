import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
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
type Story = StoryObj<typeof Text>;

const args =  {
    title: "Hello world",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eaque quos voluptates reru"
}

export const Default: Story = {
    args
};

export const DefaultDark: Story = {
    args,
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OnlyTitle: Story = {
    args: {
        title: 'Hello world'
    }
}

export const OnlyTitleDark: Story = {
    args: {
        title: "Hello world"
    }
}

export const OnlyText: Story = {
    args: {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eaque quos voluptates reru"
    }
}

export const OnlyTextDark: Story = {
    args: {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eaque quos voluptates reru"
    }
}

export const DefaultErrorTheme: Story = {
    args: {
        ...args,
        theme: TextTheme.ERROR
    }
 
};

export const DefaultDarkErrorTheme: Story = {
    args: {
        ...args,
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};