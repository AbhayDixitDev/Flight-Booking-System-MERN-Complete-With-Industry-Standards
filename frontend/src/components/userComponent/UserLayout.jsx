import UserHeader from "./UserHeader"
import UserSidebar from "./UserSidebar"
import UserFooter from "./UserFooter"
import { Outlet } from "react-router-dom"
import UserRightSidebar from "./UserRightSidebar"

const UserLayout = () => {
    return (
        <>
            <div style={{ overflow: "hidden" }}>
                <UserHeader />
                <div style={{ display: "flex" }}>
                    <UserSidebar />
                    <Outlet />
                    <UserRightSidebar />
                </div>
                <UserFooter />
            </div>
        </>
    )
}

export default UserLayout