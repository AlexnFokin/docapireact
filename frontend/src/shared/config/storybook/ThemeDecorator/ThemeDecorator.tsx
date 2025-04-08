/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

//"@ts-expect-error"
export const ThemeDecorator = (theme: Theme): Decorator => (StoryFn, context) => {
    return (
        <div className={`app ${theme}`} style={{ padding: '20px' }}>
            <StoryFn {...context} />
        </div>
    );
};