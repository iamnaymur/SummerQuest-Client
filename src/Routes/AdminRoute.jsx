// import useAdmin from "../hooks/useAdmin";
// import { useAuth } from "../hooks/useAuth";

// const AdminRoute = ({ children }) => {
//   const { user, loading } = useAuth();
//   const [isAdmin, isAdminLoading] = useAdmin();

//   if (loading || isAdminLoading) {
//     return (
//       <div className="spinner-container">
//         <div className="spinner"></div>
//       </div>
//     );
//   }

//   if (user && isAdmin) {
//     return children;
//   }

//   return <Navigate to="/"></Navigate>;
// };

// export default AdminRoute;
