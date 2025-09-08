import { Routes,Route, Navigate } from "react-router-dom";
import Adminmain from "../core/Adminmain";
import DashboardPage from "../components/Dashboardpage";
import DepartmentOverview from "../components/Department/DepartmentOverview";
import Departmentdetails from "../components/Department/Departmentdetails";
import Faculties from "../components/Faculties/Faculties";
import HookupsPage from "../components/Hookups/HookupsPage";
import SettingsAdminPage from "../components/Settings/SettingsPage";
import Notifications from "../components/Notifications/Notification";
import HeroBanner from "../components/Hero/HeroBanner";
import Latestupdateshero from "../components/Hero/Latestupdateshero";
import DepartmentAddEdit from "../shared/components/departments/Addandeditform";
import Gallery from "../components/Gallery/Gallery";
import WelcomePopup from "../components/Hero/WelcomePopup";
import Labs from "../components/Labs/Labs";
import Naacadmin from "../components/Naac/Naac";
import Committee from "../components/Committee/Committee";
import CollegeGalley from "../components/CollegeGallery/CollegeGallery";
import Additionalgallery from "../components/Additionalgallery/Additionalgallery";
import Cells from "../components/Cells/Cells";
import NewsAndEventsPage from "../components/NewsandEvents/NewsandEventspage";
import Onlineregforms from "../components/OnlineregForms/Onlineregforms";




const AdminRouter = () => {
   

  const getRedirectPath = () => {
   
    return "/dashboard/home";
  };
  return (
    <>
    
       <Routes>
          <Route element={<Adminmain/>}>
            <Route path="/home" element={<DashboardPage />} />
            <Route path="/hookups" element={<HookupsPage/>} />
            <Route path="/department/department-overview" element={<DepartmentOverview/>} />
            <Route path="/department/department-details" element={<Departmentdetails/>} />
            <Route path="/department/department-overview/add-edit" element={<DepartmentAddEdit/>} />
            <Route path="/faculties" element={<Faculties/>} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/settings" element={<SettingsAdminPage/>} />
            <Route path="/notifications" element={<Notifications/>} />
            <Route path="/hero/herobanner" element={<HeroBanner/>} />
            <Route path="/hero/latest-updates" element={<Latestupdateshero/>} />
            <Route path="/hero/welcome-popup" element={<WelcomePopup/>} />
            <Route path="/labs" element={<Labs/>} />
            <Route path="/naac" element={<Naacadmin/>} />
            <Route path="/committee" element={<Committee/>} />
            <Route path="/college-gallery" element={<CollegeGalley/>} />
            <Route path="/additional-gallery" element={<Additionalgallery/>} />
            <Route path="/cells" element={<Cells/>} />
            <Route path="/news-and-events" element={<NewsAndEventsPage/>} />
            <Route path="/online-reg-forms" element={<Onlineregforms/>} />





            {/* Add more routes as needed */}




            <Route path="/" element={<Navigate to={getRedirectPath()} replace />} />
          </Route>
      </Routes>
    </>
  )
}
export default AdminRouter;