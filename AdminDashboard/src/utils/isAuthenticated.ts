import Cookies from "js-cookie";

export default function isAuthenticated(): boolean {
    console.log("is authenticated called");
    const token = Cookies.get("jwt_token");
    console.log(token);
    return Cookies.get("jwt_token") ? true : false;
};