import { BASE_URL } from "../utils/constants";

const fetchAllProducts = async () => {
    console.log("fetch all products run");
    try {

        const response = await fetch(`${BASE_URL}/user/product/all-products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        };

        const productData = await response.json();
        return productData;

    } catch (error) {
        console.error(error);
    };
};

export default fetchAllProducts;