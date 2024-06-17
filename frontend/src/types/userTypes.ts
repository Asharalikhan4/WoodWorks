interface AddressTypes {
    street: string;
    houseNumber?: number;
    zipCode: string;
    state: string;
    country: string;
    phoneNumber: string;
    additionalInfo?: string;
};

export interface UserStateTypes {
    name: string;
    email: string;
    isAdmin?: boolean;
    address?: AddressTypes;
    cart?: Array<object>;
    orders?: Array<object>;
    wishlist?: Array<object>;
};