import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const {data: users=[],isLoading:loading,refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
      return response.json();
    },
  });
    return [users,loading,refetch]
};

export default useUsers;