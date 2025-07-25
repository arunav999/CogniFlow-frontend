// ==================== IMPORTS ====================
import { useQuery, useMutation } from "@tanstack/react-query";

import * as workspaceServices from "../../services/workspacesService";

// Get all workspaces hook
export const useGetAllWorkspaces = () => {
  return useQuery({
    queryKey: ["workspaces"],
    queryFn: workspaceServices.workspacesAll,
    retry: 1,
  });
};

// Get a workspace by id
export const useGetWorkspaceById = (id) => {
  return useQuery({
    queryKey: ["workspace", id],
    queryFn: () => workspaceServices.workspaceById(id),
    enabled: !!id,
  });
};
