interface FlashSale {
    active: boolean;
    discount: number;
    startDate: Date | undefined;
    endDate: Date | undefined;
};

interface productTypes {
    available: boolean;
    totalSales?: number;
    title: string;
    img: Array<string>;
    description: string;
    inStock: number;
    price: number;
    avaliableQuantity: number;
    flashSale?: FlashSale;
    ratings: number;
    category: string;
};

export default interface productsStateTypes {
    products: productTypes[];
};