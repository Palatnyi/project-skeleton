import {routes as homeRoutes} from "./modules/home";
import authRoutes from "./modules/auth";

export default [...homeRoutes, ...authRoutes];