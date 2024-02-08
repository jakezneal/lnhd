import { render } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import { ProductDetail } from './ProductDetail';

describe('ProductDetail', () => {
    // @ts-ignore
    let card;

    beforeEach(() => {
        card = render(<ProductDetail name={'Type'} value={'T-shirt'} />);
    });

    test('renders the name', () => {
        // @ts-ignore
        const { getByTestId } = card;
        const name = getByTestId('name');

        expect(name.textContent).toBe('Type');
    });

    test('renders the value', () => {
        // @ts-ignore
        const { getByTestId } = card;
        const value = getByTestId('value');

        expect(value.textContent).toBe('T-shirt');
    });
});
