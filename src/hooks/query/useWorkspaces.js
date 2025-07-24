// ==================== IMPORTS ====================
import { useQuery } from "@tanstack/react-query";

import { workspacesAll, workspaceById } from "../../services/workspacesService";

// Get all workspaces hook
export const useGetAllWorkspaces = () => {
  return useQuery({
    queryKey: ["workspaces"],
    queryFn: workspacesAll,
  });
};

// Get a workspace by id
export const useGetWorkspaceById = (id) => {
  return useQuery({
    queryKey: ["workspace", id],
    queryFn: () => workspaceById(id),
    enabled: !!id,
  });
};
