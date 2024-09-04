import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="text-center p-4 bg-white shadow-lg rounded">
        <h1 className="text-2xl font-bold">Oops!</h1>
        <p className="mt-2">Sorry, an unexpected error has occurred.</p>
        <p className="mt-2">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default Error;
