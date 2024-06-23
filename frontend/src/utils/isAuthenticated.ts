import Cookies from "js-cookie";

export default function isAuthenticated(): boolean {
    return Cookies.get("jwt_token") ? true : false;
};