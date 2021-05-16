import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import BaseLayout from '../layouts/BaseLayout'
import { SORT_TYPES } from '../constants';
import Filters from '../components/Filters';
import ProductLogic from '../logic/ProductLogic';
import ProductGrid from '../components/ProductGrid';
interface Props {

}

function Home({ }: Props): ReactElement {
    const [products, setProducts] = useState<Product[]>([]);
    const [sorting, setSorting] = useState(SORT_TYPES.DEFAULT.value);
    const [searchedProduct, setSearchedProduct] = useState('');
    const [loadingProducts, setLoadingProducts] = useState(true);

    const sortingChangeHandler = useCallback((event: React.ChangeEvent<{ name?: string; value: unknown; }>) => {
        setSorting(event.target.value as string)
    }, [])

    const productSearchHandler = useCallback((text: string) => {
        setSearchedProduct(text);
    }, [])

    useEffect(() => {
        setLoadingProducts(true);
        let fetchedProductsPromise;
        switch (sorting) {
            case SORT_TYPES.DEFAULT.value:
                fetchedProductsPromise = ProductLogic.getAllProducts(searchedProduct);
                break;
            case SORT_TYPES.PRICE_LOW_TO_HIGH.value:
                fetchedProductsPromise = ProductLogic.getSortedProducts(searchedProduct, 'price', 'inc');
                break;
            case SORT_TYPES.PRICE_HIGH_TO_LOW.value:
                fetchedProductsPromise = ProductLogic.getSortedProducts(searchedProduct, 'price', 'dec');
                break;
            case SORT_TYPES.RATING_LOW_TO_HIGH.value:
                fetchedProductsPromise = ProductLogic.getSortedProducts(searchedProduct, 'rating', 'inc');
                break;
            case SORT_TYPES.RATING_HIGH_TO_LOW.value:
                fetchedProductsPromise = ProductLogic.getSortedProducts(searchedProduct, 'rating', 'dec');
                break;
            default:
                fetchedProductsPromise = ProductLogic.getAllProducts(searchedProduct);
        }
        fetchedProductsPromise.then(fetchedProducts => {
            setProducts(fetchedProducts);
            setLoadingProducts(false);
        });
    }, [sorting, searchedProduct]);

    return (
        <BaseLayout>
            <main className="container mx-auto px-4">
                <div className="text-center text-2xl py-10">
                    {
                        loadingProducts ?
                            <p>Loading products</p> :
                            <p>Showing <span className="text-primary font-semibold">{products.length}</span> products</p>
                    }
                </div>
                <Filters selectedSorting={sorting} onSortSelected={sortingChangeHandler} onProductSearched={productSearchHandler} />
                <ProductGrid products={products || []} showSkeleton={loadingProducts} />
            </main>
        </BaseLayout>
    )
}

export default Home
