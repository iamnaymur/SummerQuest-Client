import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const {data: classes=[], isLoading:loading, refetch} = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
        return response.json()
    },
  });
    return [classes,loading,refetch]
};

export default useClasses;