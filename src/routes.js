import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/index.js";
import Watch from "./Pages/Watch/index.js";

function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/watch" element={<Watch />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;