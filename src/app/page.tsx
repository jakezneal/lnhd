import { unstable_noStore as noStore } from 'next/cache';
import Products from './_components/Products';
import { serverClient } from '~/trpc/serverClient';

import styles from './css/home.module.css';

export default async function Home() {
    noStore();

    const products = await serverClient.product.getProducts();

    return (
        <main className={styles.container}>
            <Products initialProducts={products} />
        </main>
    );
}
