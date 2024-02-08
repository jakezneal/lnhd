import { products } from '~/data/products';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

export const productRouter = createTRPCRouter({
    getProducts: publicProcedure.query(async () => {
        return products;
    }),
    getProduct: publicProcedure
        .input(
            z.object({
                id: z.number(),
            }),
        )
        .query(async ({ input }) => {
            const [product] = products.filter(({ id }) => id === input.id);

            if (!product) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `No product found with id '${input.id}'`,
                });
            }

            return product;
        }),
});
