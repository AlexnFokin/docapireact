import {render, screen} from '@testing-library/react';
import {Button, ButtonTheme} from 'shared/ui/Button/ui/Button';

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
        render(<Button theme={ButtonTheme.CLEAR}>test</Button>)
        const button = screen.getByText('test');
        expect(button.classList.contains('clear')).toBe(true); 
    })

});