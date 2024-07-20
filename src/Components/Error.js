import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError(Error);
    console.log(err);
    return (
        <div>
            <h1>Oopss!!  Error 404 - Page Not Found</h1>
        </div>
    )
}
export default Error;