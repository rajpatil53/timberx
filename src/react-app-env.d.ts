/// <reference types="react-scripts" />

interface SortType {
    label: string;
    value: string;
}

interface SortTypes {
    [key: string]: SortType;
}

type SortKey = 'price' | 'rating';
type SortOrder = 'inc' | 'dec';

interface Product {
    id: string;
    name: string;
    brand: string;
    image: string;
    price: number;
    rating: number;
}