import { unstable_noStore as noStore } from 'next/cache';
import Products from './_components/Products';
import { serverClient } from '~/trpc/serverClient';

export default async function Home() {
    noStore();

    const products = await serverClient.product.getProducts();

    return (
        <main>
            <Products initialProducts={products} />
        </main>
    );
}
