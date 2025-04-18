import { StoryObj, Meta } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import  {Navbar}  from "./Navbar";


const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {},
} satisfies Meta<typeof Navbar>; 

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};
