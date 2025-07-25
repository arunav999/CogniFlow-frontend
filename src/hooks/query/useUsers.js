import { useQuery } from "@tanstack/react-query";

import { getUserById } from "../../services/authService";

// Get user by id
export const useGetUserById = (id) => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });

  return {
    userData: data,
    isUserLoading: isLoading,
    userError: error,
    isUserError: isError,
  };
};
