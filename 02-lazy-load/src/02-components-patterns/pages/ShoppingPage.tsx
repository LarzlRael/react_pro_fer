import { ProductImage, ProductoTitle, ProductsButtons } from '../components';
import { ProductCard } from '../components/ProductCard';


const product = {
    id: '1',
    title: 'Coffe MUG - Card',
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <hr />
                <ProductCard
                    product={product}>
                    <ProductImage />
                    <ProductoTitle />
                    <ProductsButtons />
                </ProductCard >

                <ProductCard
                    product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Hola mundo'} />
                    <ProductCard.Buttons />
                </ProductCard>

            </div >
        </div>
    )
}

