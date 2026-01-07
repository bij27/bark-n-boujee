import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import DashboardModal from "./components/dashboard/DashboardModal";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <DashboardModal />
    </>
  );
}

export default App;
