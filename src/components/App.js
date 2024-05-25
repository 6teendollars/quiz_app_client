import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*components */
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";
import { CheckuserExist } from "../helper/helper";

/**routess**/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element:<CheckuserExist><Quiz/></CheckuserExist>,
  },
  {
    path: "/result",
    element: <CheckuserExist><Result/></CheckuserExist>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
