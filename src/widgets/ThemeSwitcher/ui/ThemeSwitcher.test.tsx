import { render, screen } from '@testing-library/react';
import ThemeSwitcher from './ThemeSwitcher';

describe('TemeSwitcher', () => {
    test('render', () => {
        render(<ThemeSwitcher />);
        expect(screen.getByTestId('ThemeSwitcher')).toBeInTheDocument();
    });
    test('class', () => {
        render(<ThemeSwitcher />);
        expect(screen.getByTestId('ThemeSwitcher')).toHaveClass('but');
    });
});
