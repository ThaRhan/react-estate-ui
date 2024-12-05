import Layout from "./routes/layout/layout";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage"; 
import SinglePage from "./routes/singlePage/singlePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from "./routes/profile/Profile";


function App() {

  const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/list",
        element: <ListPage/>
      },
      {
        path: "/:id",
        element: <SinglePage/>
      },
      {
        path: "/profile",
        element: <Profile/>
      }
    ]
  }

]);
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App