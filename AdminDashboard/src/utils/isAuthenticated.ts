import Cookies from "js-cookie";

export default function isAuthenticated(): boolean {
    console.log("is authenticated called");
    return Cookies.get("token") ? true : false;
};