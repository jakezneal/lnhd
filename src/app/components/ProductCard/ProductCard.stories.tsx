import type { Meta, StoryObj } from '@storybook/react';

import { ProductCard } from './ProductCard';
import { products } from '~/data/products';

const [firstProduct] = products;

const meta = {
    title: 'ProductCard',

    component: ProductCard,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// TODO: sort this out.
export const productCard: Story = {
    args: {
        type: firstProduct?.type ?? '',
        brand: firstProduct?.brand ?? '',
        description: firstProduct?.description ?? '',
        imageUrl: firstProduct?.imageUrl ?? '',
        colour: firstProduct?.colour ?? '',
        price: firstProduct?.price ?? {
            retail: '',
            rental: {},
        },
        minimumRentalPeriod: firstProduct?.minimumRentalPeriod ?? '',
        tags: firstProduct?.tags ?? {},
    },
};
