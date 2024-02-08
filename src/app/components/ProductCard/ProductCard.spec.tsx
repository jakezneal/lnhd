import { type RenderResult, render } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import { ProductCard } from './ProductCard';
import { type queries } from '@testing-library/react';

describe('ProductCard', () => {
    let card: RenderResult<typeof queries, HTMLElement>;

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

        // @ts-expect-error src exists
        expect(image.src).toContain('https://via.placeholder.com/100x100');
        // @ts-expect-error alt exists
        expect(image.alt).toContain('A T-shirt');
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
