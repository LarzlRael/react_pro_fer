import { createContext } from 'react';
import styles from '../styles/styles.module.css';
import { useCounter } from '../hooks/useCounter';
import { ProductContextProps, ProductCardProps } from '../layout/interfaces';
import { ProductImage, ProductoTitle, ProductsButtons } from '.';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ product, children }: ProductCardProps) => {
    const { counter, increaseBy } = useCounter();
    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}

ProductCard.Title = ProductoTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductsButtons;