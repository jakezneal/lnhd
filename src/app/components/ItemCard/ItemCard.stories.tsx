import type { Meta, StoryObj } from '@storybook/react';

import { ItemCard } from './ItemCard';

const meta = {
    title: 'ItemCard',

    component: ItemCard,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
} satisfies Meta<typeof ItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const itemCard: Story = {};
