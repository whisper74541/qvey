import { createBrowserRouter, RouterProvider } from "react-router"
import { HomePage } from "../../page/home"
import Dashboard from "../layout/ui/Dashboard"

const router = createBrowserRouter([
    {
        path: "/",
        Component: Dashboard,
        children: [
            { index: true, Component: HomePage }
        ]
        
    }    
])
function Router() {
    return <RouterProvider router={router}/>
}
export default Router