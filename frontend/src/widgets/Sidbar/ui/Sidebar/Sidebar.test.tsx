import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import Sidebar from './Sidebar';

jest.mock('./Sidebar.module.scss', () => ({
    Sidebar: 'Sidebar',
    collapsed: 'collapsed',
    switchers: 'switchers'
}));

describe('Sidebar Component', () => {
  
    test('renders Sidebar', () => {   
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {   
        renderWithTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument();
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    });
    
});
