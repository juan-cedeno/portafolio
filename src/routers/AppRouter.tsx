import {
BrowserRouter,
Routes,
Route,
} from "react-router-dom";
import { NavBar } from "../components";
import { HomePage } from "../pages";

export const AppRouter = () => {
return (
<div>
    <BrowserRouter>
    <NavBar/>
        <Routes>
            <Route path = '/' element = {<HomePage/>}/>
        </Routes>
    </BrowserRouter>
</div>
)
}