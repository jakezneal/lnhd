import { type Product } from '~/data/products';
import styles from './productcard.module.css';

export const ProductCard = ({ imageUrl, brand, description }: Product) => {
    return (
        <article itemScope itemType="http://schema.org/Product">
            <img src={imageUrl} alt={description} itemProp="image" data-testid="image" className={styles.image} />
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
