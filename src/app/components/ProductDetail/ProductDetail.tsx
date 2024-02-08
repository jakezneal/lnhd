import styles from './productdetail.module.css';

export const ProductDetail = ({ name, value }: { name: string; value: string }) => {
    return (
        <div className={styles.wrapper}>
            <p data-testid="name">{name}</p>
            <p data-testid="value">{value}</p>
        </div>
    );
};
