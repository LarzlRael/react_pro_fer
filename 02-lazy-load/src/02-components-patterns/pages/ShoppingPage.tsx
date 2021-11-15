import React from 'react'
import { ProductCard} from '../components/ProductCard';

const product = {
    id: '1',
    title: 'Coffe MUG - Card',
}

export const ShoppingPage = () => {
    return (
        <div>
            ShoppingPage
            <hr />
            <ProductCard
                product={product}>
                <ProductCard.Image />
                <ProductCard.Title title={'Hola mundo'} />
                <ProductCard.Buttons />
            </ProductCard >

            <ProductCard
                product={product}>
                <ProductCard.Image />
                <ProductCard.Title title={'Hola mundo'} />
                <ProductCard.Buttons />
            </ProductCard>

        </div >
    )
}
