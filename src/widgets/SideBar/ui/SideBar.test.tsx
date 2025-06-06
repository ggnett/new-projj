import { fireEvent, screen } from '@testing-library/react';
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation';
import SideBar from './SideBar';

describe('Sidebar', () => {
    test('render', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('class', () => {
        renderWithTranslation(<SideBar />);
        const tglButton = screen.getByTestId('toggleButton');
        fireEvent.click(tglButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
