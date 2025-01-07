import Header from "./UserHeader";
import Sidebar from "./UserSidebar";
import Footer from "./UserFooter";
import {Outlet} from "react-router-dom";

const UserLayout = () => {
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

export default UserLayout;
