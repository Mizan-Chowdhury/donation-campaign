import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center space-y-3">
      <h1 className="text-6xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl">{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
