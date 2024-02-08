import { unstable_noStore as noStore } from 'next/cache';
import { serverClient } from '~/trpc/serverClient';

import styles from '../../css/product.module.css';
import { ProductDetail } from '~/app/components/ProductDetail/ProductDetail';

export default async function ProductPage({ params }: { params: { id: string } }) {
    noStore();

    const product = await serverClient.product.getProduct({ id: parseInt(params.id) });

    type ProductDetail = {
        name: string;
        value: string;
    };

    const productDetails = [
        {
            name: 'Type',
            value: 'type',
        },
        {
            name: 'Colour',
            value: 'colour',
        },
        {
            name: 'Minimum Rental Period',
            value: 'minimumRentalPeriod',
        },
    ] satisfies ProductDetail[];

    return (
        <div className={styles.wrapper}>
            <div>
                <img src={product.imageUrl} alt={product.description} className={styles.image} />
            </div>
            <div className={styles.details}>
                <h1 className={styles.brand}>{product.brand}</h1>
                <h2 className={styles.description}>{product.description}</h2>

                <ul className={styles['details-list']}>
                    {productDetails.map(({ name, value }) => (
                        <li className={styles['details-item']}>
                            {/* @ts-ignore */}
                            <ProductDetail name={name} value={product[value]} />
                        </li>
                    ))}
                    <li className={styles['details-item']}>
                        <ProductDetail name={'RRP'} value={product.price.retail} />
                    </li>
                </ul>
            </div>
        </div>
    );
}
