import { unstable_noStore as noStore } from 'next/cache';
import { serverClient } from '~/trpc/serverClient';

import styles from '../../css/product.module.css';
import { ProductDetail } from '~/app/components/ProductDetail/ProductDetail';
import Image from 'next/image';

export default async function ProductPage({ params }: { params: { id: string } }) {
    noStore();

    const product = await serverClient.product.getProduct({ id: parseInt(params.id) });

    return (
        <div className={styles.wrapper}>
            <div>
                <Image src={product.imageUrl} alt={product.description} className={styles.image} width={843} height={1127} />
            </div>
            <div className={styles.details}>
                <h1 className={styles.brand}>{product.brand}</h1>
                <h2 className={styles.description}>{product.description}</h2>

                <ul className={styles['details-list']}>
                    <li className={styles['details-item']}>
                        <ProductDetail name={'Type'} value={product.type} />
                    </li>
                    <li className={styles['details-item']}>
                        <ProductDetail name={'Colour'} value={product.colour} />
                    </li>
                    <li className={styles['details-item']}>
                        <ProductDetail name={'Minimum Rental Period'} value={product.minimumRentalPeriod} />
                    </li>
                    <li className={styles['details-item']}>
                        <ProductDetail name={'RRP'} value={product.price.retail} />
                    </li>
                </ul>
            </div>
        </div>
    );
}
