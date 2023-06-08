import { useQuery } from "@tanstack/react-query";

const useStudentClasses = () => {
  const {
    data: studentClasses = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["studentClasses"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/studentClasses`
      );
      return response.json();
    },
  });
  return [studentClasses, loading, refetch];
};

export default useStudentClasses;
