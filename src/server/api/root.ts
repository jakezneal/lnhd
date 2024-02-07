import { createTRPCRouter } from '~/server/api/trpc';
import { productRouter } from './routers/products';

export const appRouter = createTRPCRouter({
    product: productRouter,
});

export type AppRouter = typeof appRouter;
