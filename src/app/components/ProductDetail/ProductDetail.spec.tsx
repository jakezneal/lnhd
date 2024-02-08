import { type RenderResult, render } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import { ProductDetail } from './ProductDetail';
import { type queries } from '@testing-library/react';

describe('ProductDetail', () => {
    let card: RenderResult<typeof queries, HTMLElement>;

    beforeEach(() => {
        card = render(<ProductDetail name={'Type'} value={'T-shirt'} />);
    });

    test('renders the name', () => {
        const { getByTestId } = card;
        const name = getByTestId('name');

        expect(name.textContent).toBe('Type');
    });

    test('renders the value', () => {
        const { getByTestId } = card;
        const value = getByTestId('value');

        expect(value.textContent).toBe('T-shirt');
    });
});
