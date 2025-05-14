import { StoryObj, Meta } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import  {Navbar}  from "./Navbar";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";


const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {},
} satisfies Meta<typeof Navbar>; 

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    decorators: [
        StoreDecorator({})
    ]
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({})
    ]
};

const authData = {
    id: 0,
    email: ""
}

export const LightAuth: Story = {
    decorators: [
        StoreDecorator({user: { authData}})
    ]
}

export const DarkAuth: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({user: {authData}})
    ]
}