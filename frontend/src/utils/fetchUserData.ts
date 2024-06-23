import Cookies from "js-cookie";
import { UserStateTypes } from "../types/userTypes";

const fetchUserData = async () => {
    try {
        const token = Cookies.get("jwt_token");
        console.log('Fetching user data...', token);

        if (!token) {
            throw new Error('No token found');
        };

        const response = await fetch('http://localhost:8080/api/v1/user/user-data', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const userData: UserStateTypes = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        Cookies.remove('token');
    }
};

export default fetchUserData;