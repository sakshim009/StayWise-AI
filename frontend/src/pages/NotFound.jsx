import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {

  const navigate = useNavigate();

  return (

    <div className="notfound">

      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <button onClick={() => navigate("/")}>
        Back to Home
      </button>

    </div>

  );
}

export default NotFound;