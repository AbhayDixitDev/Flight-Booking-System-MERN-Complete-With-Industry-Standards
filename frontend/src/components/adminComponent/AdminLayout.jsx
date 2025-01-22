import AdminHeader from "./AdminHeader"
import AdminSidebar from "./AdminSidebar"
import AdminFooter from "./AdminFooter"
import {Outlet} from "react-router-dom"
import AdminRightSidebar from "./AdminRightSidebar"

const AdminLayout=()=>{
    return(
        <>
        <div style={{overflow:"hidden"}}>
        <AdminHeader/>
        <AdminSidebar/>
        <Outlet/>
        <AdminRightSidebar/>
        <AdminFooter/>
        </div>
        </>
    )
}

export default AdminLayout