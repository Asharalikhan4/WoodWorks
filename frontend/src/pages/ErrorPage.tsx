import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage(): JSX.Element {

    const error = useRouteError() as {statusText?: string | undefined; status?: number | undefined;};

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText || error?.status}</i>
            </p>
            <Link to={"/"}>GO Back Home</Link>
        </div>
    );
};