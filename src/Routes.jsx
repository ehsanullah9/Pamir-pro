import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";

export const routes = [
    {path:'/' , element:<Home />},
    {path:'/about' , element:<About />},
    {path:'/services' , element:<Services/>}
]