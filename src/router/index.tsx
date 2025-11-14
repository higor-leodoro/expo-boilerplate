import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import { useAuthStore } from "@/stores";

export default function Routes() {
 const { isAuthenticated, loading } = useAuthStore();

 if (loading) return;

 return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}
