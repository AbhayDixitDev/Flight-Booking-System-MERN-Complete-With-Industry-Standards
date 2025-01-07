import AdminHeader from "./AdminHeader"
import AdminSidebar from "./AdminSidebar"
import AdminFooter from "./AdminFooter"
import {Outlet} from "react-router-dom"


const AdminLayout=()=>{
    return(
        <>
        <AdminHeader/>
        <AdminSidebar/>
        <Outlet/>
        <AdminFooter/>
        </>
    )
}

export default AdminLayout