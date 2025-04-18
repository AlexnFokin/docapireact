import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

jest.mock('./Sidebar.module.scss', () => ({
    Sidebar: 'Sidebar',
    collapsed: 'collapsed',
    switchers: 'switchers'
}));

describe('Sidebar Component', () => {
  
    test('renders Sidebar', () => {   
        componentRender(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {   
        componentRender(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument();
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    });
    
});
