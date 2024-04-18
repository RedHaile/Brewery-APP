import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import BreweryPage from "./pages/BreweryPage";

 const router = createBrowserRouter([
   { path: "/", element: <Home /> }, 
   { path: "/breweries/:id", element: <BreweryPage /> }, 
  ]);   
  
  function App() {
      return <RouterProvider router={router} />;
 }


export default App;