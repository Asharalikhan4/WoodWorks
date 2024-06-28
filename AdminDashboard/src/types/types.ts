export interface InputBoxPropsTypes {
    type: string;
    value: string | number;
    name: string;
    id: string;
    title: string;
    placeholder: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface AddProductPageStateTypes {
    productName: string;
    productDescription: string;
    productPrice: number;
    productType: string;
    productImage: string[];
};