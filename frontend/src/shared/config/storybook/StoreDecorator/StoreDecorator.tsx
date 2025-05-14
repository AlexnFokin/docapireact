import { Decorator } from "@storybook/react/*";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";


// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: Partial<StateSchema>): Decorator => (StoryFn) => (
    <StoreProvider initialState={state}>
        <StoryFn />
    </StoreProvider>
);