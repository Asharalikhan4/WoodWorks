import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage(): JSX.Element {

    const error = useRouteError() as {statusText?: string | undefined; status?: number | undefined;};

    return (
        // <div id="error-page">
        //     <h1>Oops!</h1>
        //     <p>Sorry, an unexpected error has occurred.</p>
        //     <p>
        //         <i>{error?.statusText || error?.status}</i>
        //     </p>
        //     <Link to={"/"}>GO Back Home</Link>
        // </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto">
        {/* <ErrorIllustration className="w-full h-auto mb-8" /> */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{error?.status}</h1>
          <p className="text-gray-600 mb-8">
            {error?.statusText}
          </p>
          <Link
            to={"/"}
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
    );
};