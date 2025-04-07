import {render, screen} from '@testing-library/react';
import {Button, ThemeButton} from 'shared/ui/Button/';

jest.mock('./Button.module.scss', ()=> ({
    clear: 'clear'
}));


describe('Button', () => {
    test('Button with test text', () => {
        render(<Button>test</Button>)
        const button = screen.getByText('test');
        expect(button).toBeInTheDocument();
    });

    test("Button with theme", () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>)
        const button = screen.getByText('test');
        expect(button.classList.contains('clear')).toBe(true); 
    })

});