import AuthenticationPage from "@/routes/authentication/page";
import Classes from "@/routes/classes/page";
import { Routes as Switch, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" element={<AuthenticationPage />} />
      <Route path="/classes" element={<Classes />} />
    </Switch>
  );
};

export { AppRoutes };
