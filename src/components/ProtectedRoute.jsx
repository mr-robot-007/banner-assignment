import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../helpers/auth";

function ProtectedRoute({ children }) {
//   const { user } = useAuth();
  const navigate = useNavigate();  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const user = await getCurrentUser();
      if (!user) {
        navigate("/login");
      } else {
        setIsLoading(false);
      }
    }
    checkUser();
  }, [navigate]);

  return <>{children}</>;
}

export default ProtectedRoute;
