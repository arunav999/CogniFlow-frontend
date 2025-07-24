import { useQuery } from "@tanstack/react-query";

import { getProjectById } from "../../services/projectsService";

// Get project by
export const useGetProjectById = (id) => {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectById(id),
    enabled: !!id,
  });
};
