import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProgressBarLoader } from "./components/common/loaders/Loaders";
import { useEffect, useState } from "react";
import DashboardLayout from "./components/layouts/dashboardlayout/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Listing from "./pages/listing/Listing";
import AddListing from "./pages/addListing/AddListing";
import Tenants from "./pages/tenants/Tenants";
import Analytics from "./pages/analytics/Analytics";
import ListingDetails from "./pages/listingDetails/ListingDetails";
import Settings from "./pages/settings/Settings";

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after a delay
    }, 2000); // Adjust delay time as needed

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  // Render loading spinner or content based on the loading state
  const renderContent = () => {
    if (isLoading) {
      return (
        <section className="relative h-screen bg-#ededff w-full flex flex-col justify-center items-center">
          <section className="w-36">
            {/* <img className="w-full" src={logo} alt="" /> */}
          </section>
          <section><ProgressBarLoader /></section>
        </section>
      );
    } else {
      return (
        <section className="App font-[Plus]">
          <RouterProvider router={router} />
          <ToastContainer />
        </section>
      );
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/listings" element={<Listing />} />
          <Route path="/dashboard/listings/:id" element={<ListingDetails />} />
          <Route path="/dashboard/listings/add" element={<AddListing />} />
          <Route path="/dashboard/tenants" element={<Tenants />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </>
    )
  );
  return renderContent();
}

export default App;
