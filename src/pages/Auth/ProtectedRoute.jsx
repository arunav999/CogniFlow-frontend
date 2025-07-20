// imports
import { Navigate, Outlet } from "react-router-dom";

// React Spinners
import { PropagateLoader } from "react-spinners";

// Custom Hook
import useUserAuth from "../../hooks/useUserAuth";

const ProtectedRoute = ({ allowedRoles = [] }) => {
  // Extracting form context
  const { user, loading } = useUserAuth();

  // Still loadin user info
  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <PropagateLoader loading={loading} speedMultiplier={1.25} size={20} />
      </div>
    );

  // Not logged in
  if (!user) return <Navigate to="/auth" replace />;

  // Role-based access
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/403-forbidden" replace />;
  }

  // All checks passed
  return <Outlet />;
};

export default ProtectedRoute;

// ========== APP ROUTES ==========
// const AppRoutes = () => {
//   return (
//     <>
//       <Routes>
//         {/* ========== Public Routes ========== */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/auth" element={<AuthPage />} />

//         {/* ========== Admin Routes ========== */}
//         {/* DASHBOARD */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//         {/* MANAGE USERS */}
//         <Route
//           path="/admin/manage-users"
//           element={
//             <ProtectedRoute>
//               <ManageTeamMembers />
//             </ProtectedRoute>
//           }
//         />
//         {/* MANAGE WORKSPACES */}
//         <Route
//           path="/admin/workspaces"
//           element={
//             <ProtectedRoute>
//               <ManageWorkspaces />
//             </ProtectedRoute>
//           }
//         />

//         {/* ========== Manager Routes ========== */}
//         {/* DASHBOARD */}
//         <Route
//           path="/manager"
//           element={
//             <ProtectedRoute>
//               <ManagerDashboard />
//             </ProtectedRoute>
//           }
//         />
//         {/* MANAGE PROJECTS */}
//         <Route
//           path="/manager/projects"
//           element={
//             <ProtectedRoute allowedRoles={[ROLES.MANAGER, ROLES.ADMIN]}>
//               <ManageProjects />
//             </ProtectedRoute>
//           }
//         />

//         {/* ========== Developer Routes ========== */}
//         {/* DASHBOARD */}
//         <Route
//           path="/developer"
//           element={
//             <ProtectedRoute>
//               <DeveloperDashboard />
//             </ProtectedRoute>
//           }
//         />
//         {/* TICKETS BOARD */}
//         <Route
//           path="/developer/tickets"
//           element={
//             <ProtectedRoute
//               allowedRoles={[ROLES.DEVELOPER, ROLES.MANAGER, ROLES.ADMIN]}
//             >
//               <TicketsBoard />
//             </ProtectedRoute>
//           }
//         />

//         {/* ========== Shared Tickets Routes ========== */}
//         {/* VIEW TICKETS */}
//         <Route
//           path="/tickets"
//           element={
//             <ProtectedRoute
//               allowedRoles={[ROLES.DEVELOPER, ROLES.MANAGER, ROLES.ADMIN]}
//             >
//               <ViewTickets />
//             </ProtectedRoute>
//           }
//         />

//         {/* TICKET DETAILS */}
//         <Route
//           path="/tickets/:ticketId"
//           element={
//             <ProtectedRoute
//               allowedRoles={[ROLES.DEVELOPER, ROLES.MANAGER, ROLES.ADMIN]}
//             >
//               <TicketDetails />
//             </ProtectedRoute>
//           }
//         />

//         {/* ========== Error Routes ========== */}
//         {/* Not found */}
//         <Route path="*" element={<NotFound />} />

//         {/* Unauthorized */}
//         <Route path="/unauthorized" element={<Unauthorized />} />

//         {/* Forbidden */}
//         <Route path="/403-forbidden" element={<Forbidden />} />
//       </Routes>
//     </>
//   );
// };