import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom"
import Slide from "./Slide";

const Layout = () => {
    return (
        <>
            <Header></Header>
            <Slide></Slide>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
export default Layout;