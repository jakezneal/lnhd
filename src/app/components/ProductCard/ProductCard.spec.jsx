import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
    test('renders', () => {
        const { getByTestId } = render(<ProductCard />);
        const heading = getByTestId('heading');

        expect(heading.textContent).toBe('Item');
    });
});
