import { type Product } from '~/data/products';
import styles from './productcard.module.css';
import Image from 'next/image';

export const ProductCard = ({ imageUrl, brand, description }: Product) => {
    return (
        <article itemScope itemType="http://schema.org/Product">
            <Image src={imageUrl} alt={description} itemProp="image" data-testid="image" className={styles.image} width={843} height={1127} />
            <div className={styles.details}>
                <h2 className={styles.brand} data-testid="brand">
                    {brand}
                </h2>
                <p className={styles.description} data-testid="description">
                    {description}
                </p>
            </div>
        </article>
    );
};
