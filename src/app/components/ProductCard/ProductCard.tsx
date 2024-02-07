import { type Product } from "~/data/products";

export const ProductCard = ({ imageUrl, brand, description }: Product) => {
    return (
        <article itemScope itemType="http://schema.org/Product">
            <img src={imageUrl} alt={description} itemProp="image" />
            <h2 data-testid="brand">{brand}</h2>
            <p data-testid="description">{description}</p>
        </article>
    );
};
