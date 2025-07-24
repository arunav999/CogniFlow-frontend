import { useQuery } from "@tanstack/react-query";

import { getUserById } from "../../services/authService";

// Get user by id
export const useGetUserById = (id) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
};
