import { Alert, Pagination } from '@material-ui/lab';
import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react'
import { pageSize } from '../constants';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

interface Props {
    products: Product[];
    showSkeleton?: boolean;
}

function ProductGrid({ products, showSkeleton }: Props): ReactElement {
    const [pageNum, setPageNum] = useState(1);

    const productGrid = useMemo((): JSX.Element[] => {
        const productTiles: JSX.Element[] = [];
        const startPos = (pageNum - 1) * pageSize;
        for (let i = 0; i < pageSize; i++) {
            const product = products[startPos + i];
            if (showSkeleton) {
                productTiles.push(<ProductCardSkeleton />);
            }
            else {
                if (products.length === 0) return [<Alert className="col-span-3" variant="outlined" severity="error">No results found.</Alert>]
                if (product) {
                    productTiles.push(
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            brand={product.brand}
                            image={product.image}
                            price={product.price}
                            rating={product.rating}
                        />
                    )
                }
            }
        }
        return productTiles;
    }, [pageNum, showSkeleton, products]);

    const onPageSelected = useCallback((_: object, page: number) => {
        setPageNum(page);
    }, [])

    useEffect(() => {
        setPageNum(1);
    }, [products])

    return (
        <div className="my-8 flex flex-col items-end">
            <div className={`w-full grid grid-cols-1 grid-rows-12
                        sm:grid-cols-2 sm:grid-rows-6 
                        md:grid-cols-3 md:grid-rows-4
                        gap-6 xl:gap-10`}>
                {productGrid}
            </div>
            <Pagination
                className="mt-6"
                count={Math.ceil(products.length / pageSize)}
                showFirstButton
                showLastButton
                onChange={onPageSelected}
                page={pageNum}
                size="medium"
                color="primary" />
        </div>
    )
}

export default ProductGrid
