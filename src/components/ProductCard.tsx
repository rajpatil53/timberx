import React, { ReactElement } from 'react'
import { Rating } from '@material-ui/lab';
import { Favorite, StarBorderOutlined } from '@material-ui/icons';

interface Props {
    name: string;
    brand: string;
    image: string[];
    price: number;
    rating: number;
}

function ProductCard({ name, brand, image, price, rating }: Props): ReactElement {
    return (
        <div className="w-full">
            <div className="overflow-hidden rounded-lg shadow-sm border">
                <img alt="Placeholder" className="block h:60 sm:h-40 lg:h-60 xl:h-80 w-full object-contain py-2" src={image[0]}></img>
                <header className="flex flex-col justify-center leading-tight px-4 md:px-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg whitespace-nowrap overflow-hidden overflow-ellipsis">
                            {name}
                        </h1>
                        <Favorite className="cursor-pointer text-secondary hover:text-primary" />
                    </div>
                    <p className="text-grey-darker text-sm text-secondary">
                        {brand}
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-4 md:p-4 ">
                    <div className="text-textColor font-bold">{'Rs. ' + price}</div>
                    <div><Rating value={rating} readOnly emptyIcon={<StarBorderOutlined />} /></div>
                </footer>
            </div>
        </div>
    )
}

export default ProductCard
