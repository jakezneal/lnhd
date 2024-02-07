'use client';

import { api } from '~/trpc/react';
import { serverClient } from '~/trpc/serverClient';
import { ProductCard } from '../components/ProductCard/ProductCard';

import styles from '../index.module.css';

const Products = ({ initialProducts }: { initialProducts: Awaited<ReturnType<(typeof serverClient)['product']['getProducts']>> }) => {
    const getProducts = api.product.getProducts.useQuery(undefined, {
        initialData: initialProducts,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });

    return (
        <ul className={styles.products}>
            {getProducts?.data?.map((product) => (
                <li key={product.id} className={styles.product}>
                    <ProductCard {...product} />
                </li>
            ))}
        </ul>
    );
};

export default Products;
