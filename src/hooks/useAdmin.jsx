import { useAuth } from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user } = useAuth();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/user/${user?.email}`
      );
      return res.json();
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
