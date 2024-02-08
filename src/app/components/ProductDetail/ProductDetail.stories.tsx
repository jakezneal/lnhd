import type { Meta, StoryObj } from '@storybook/react';

import { ProductDetail } from './ProductDetail';

const meta = {
    title: 'ProductDetail',

    component: ProductDetail,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
} satisfies Meta<typeof ProductDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const productDetail: Story = {
    args: {
        name: 'Type',
        value: 'T-shirt',
    },
};
