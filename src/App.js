import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import MainVisual from "./MainVisual";

const App = () => {
    return (
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<MainVisual/>} />
        </Route>
        </Routes>
    )
}

export default App;