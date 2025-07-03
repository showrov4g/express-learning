
import { App } from "@/App";
import { User } from "@/pages/User";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[{
            path:"user",
            element: <User />
        }]
    }
])

export default router;