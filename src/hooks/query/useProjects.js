import { useQuery, useMutation } from "@tanstack/react-query";

import * as projectServices from "../../services/projectsService";

// Get project by
export const useGetProjectById = (id) => {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => projectServices.getProjectById(id),
    enabled: !!id,
  });
};
