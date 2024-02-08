'use client';

import { api } from '~/trpc/react';
import { serverClient } from '~/trpc/serverClient';
import { ProductCard } from '../components/ProductCard/ProductCard';

import styles from '../css/home.module.css';
import Link from 'next/link';

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
                    <Link href={`/product/${product.id}`}>
                        <ProductCard {...product} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Products;
