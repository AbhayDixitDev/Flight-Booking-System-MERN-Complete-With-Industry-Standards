import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="d-flex flex-column h-100">
            <Header />
            <div className="d-flex flex-row flex-grow-1">
                <Sidebar />
                <div className="flex-grow-1">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
