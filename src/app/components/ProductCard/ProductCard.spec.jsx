import { render } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
    let card;

    beforeEach(() => {
        card = render(
            <ProductCard
                type={'T-shirt'}
                brand={'Burberry'}
                description={'A T-shirt'}
                imageUrl={'https://via.placeholder.com/100x100'}
                colour={'White'}
                price={{
                    retail: '£100',
                    rental: {
                        1: '£10',
                    },
                }}
                minimumRentalPeriod={'1 days'}
                tags={['oversized']}
            />,
        );
    });

    test('renders the image', () => {
        const { getByTestId } = card;
        const image = getByTestId('image');

        expect(image).toHaveAttribute('src', 'https://via.placeholder.com/100x100');
        expect(image).toHaveAttribute('alt', 'A T-shirt');
    });

    test('renders the brand', () => {
        const { getByTestId } = card;
        const brand = getByTestId('brand');

        expect(brand.textContent).toBe('Burberry');
    });

    test('renders the description', () => {
        const { getByTestId } = card;
        const description = getByTestId('description');

        expect(description.textContent).toBe('A T-shirt');
    });
});
