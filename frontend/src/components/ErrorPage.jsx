import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Error Found</h2>
            <Link to="/"><button>Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;