import products from '../data/products.json';

export default class ProductLogic {

    public static getAllProducts = (searchedProduct: string): Promise<Product[]> => {
        return new Promise((resolve) => {
            if (searchedProduct) {
                setTimeout(() => resolve(ProductLogic.searchProductByName(searchedProduct)), 2000);
            }
            else {
                setTimeout(() => resolve(products), 2000);
            }
        })
    }

    public static getSortedProducts = (searchedProduct: string, sortKey: SortKey, sortOrder: SortOrder): Promise<Product[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (sortKey === 'price') {
                    resolve(ProductLogic.getProductsSortedByPrice(searchedProduct, sortOrder));
                }
                else {
                    resolve(ProductLogic.getProductsSortedByRating(searchedProduct, sortOrder));
                }
            }, 2000)
        })
    }

    public static searchProductByName = (searchText: string): Product[] => {
        const searchRes = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        return searchRes;
    }

    private static getProductsSortedByPrice = (searchedProduct: string, order: SortOrder): Product[] => {
        return ProductLogic.searchProductByName(searchedProduct).sort((a, b) => order === 'inc' ? a.price - b.price : b.price - a.price)
    }

    private static getProductsSortedByRating = (searchedProduct: string, order: SortOrder): Product[] => {
        return ProductLogic.searchProductByName(searchedProduct).sort((a, b) => order === 'inc' ? a.rating - b.rating : b.rating - a.rating)
    }
}