import type { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonTheme, ButtonSize } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Disabled } from 'shared/ui/Input/Input.stories';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        theme: {
            control: 'select',
            options: Object.values(ButtonTheme),
        },
        size: {
            control: 'select',
            options: Object.values(ButtonSize),
        },
        children: {
            control: 'text',
        },
    },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    children: 'Text',
    disabled: true
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const SizeM = Template.bind({});
SizeM.args = {
    children: 'Text',
    size: ButtonSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    children: 'Text',
    size: ButtonSize.L,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    children: 'Text',
    size: ButtonSize.Xl,
};
