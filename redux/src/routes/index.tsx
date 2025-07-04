
import { App } from "@/App";
import Task from "@/pages/task";
import { User } from "@/pages/User";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
            path:"user",
            element: <User />
        },{
            path:"task",
            element: <Task/>
        }
    ]
    }
])

export default router;