import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Updated from "./Component/Updated";
import User from "./Component/User";

function App() {
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch("http://localhost:5000/user/add"),
    },
    {
      path: "/user/add",
      element: <User></User>,
    },
    {
      path: "/updated/:id",
      element: <Updated></Updated>,
      loader: ({ params }) =>
        fetch(`http://localhost:5000/user/add/${params.id}`),
    },
  ]);
  return (
    <div className="App">
      <a href="/"> home </a>
      <a href="/user/add"> add user </a>
      {/* <a href="/updated"> updated user </a> */}
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;
