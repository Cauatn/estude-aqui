import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./core/routes";

export default function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}
