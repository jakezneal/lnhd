import type { Meta, StoryObj } from '@storybook/react';

import { ProductCard } from './ProductCard';

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

export const productCard: Story = {};
