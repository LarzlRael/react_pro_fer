
import { ProductsButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductoTitle } from './ProductTitle';

import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductoCardPHOCProps } from '../layout/interfaces';
export { ProductsButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductoTitle } from './ProductTitle';




export const ProductCard: ProductoCardPHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductoTitle,
    Image: ProductImage,
    Buttons: ProductsButtons,
});

export default ProductCard;