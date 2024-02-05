import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { ItemCard } from './ItemCard';

describe('ItemCard', () => {
    test('renders', () => {
        const { getByTestId } = render(<ItemCard />);
        const heading = getByTestId('heading');

        expect(heading.textContent).toBe('Item');
    });
});
