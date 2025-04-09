/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

//"@ts-expect-error"
export const ThemeDecorator = (theme: Theme): Decorator => (StoryFn, context) => (
    
    <ThemeProvider >
        <div className={`app ${theme}`} style={{ padding: '20px' }}>
            <StoryFn {...context} />
        </div>
    </ThemeProvider>
);