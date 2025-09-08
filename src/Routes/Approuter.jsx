import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import Main from "../core/Main";
import VerifyOtp from "../shared/components/Login/veifyOtp";
import AdminRouter from "../admin/Router/AdminRouter";
import ProtectedRoute from "../shared/services/token/ProtectedRoute";
import AboutUs from "../shared/components/AboutUs/Aboutus";
import ScrollToTop from "./ScrollToTop";
import Hompage from "../components/Hompage";
import DepartmentPage from "../components/DepartmentPage";
import FacilitiesPage from "../components/FacilitiesPage";
import CellPage from "../components/CellPage";
import Cell2 from "../shared/components/cell/Cell2";
import CommittesPage from "../components/CommittesPage";
import AlumniPage from "../components/AlumniPage";
import PlacementPage from "../components/PlacementPage";
import ContactusPage from "../components/ContactusPage";
import Naac from "../components/Naac";
import PrelineScript from "../PrelineScript";
import StakeHolderPage from "../components/StakeHolderPage";
import GalleryPage from "../components/GalleryPage";
import ViewEventsPage from "../shared/components/ViewEventsPage/ViewEventsPage";
import NotificationView from "../components/NotificationView";
import AllUpdatesPage from "../shared/components/Home/AllUpdatesPage";
import Nisppage from "../components/Nisppage";
import AboutusPage from "../components/AboutusPage";
import PrincipalPage from "../shared/components/Home/Principal";
import Accrediation from "../shared/components/AboutHEI/Accrediation";
import ActAndStatus from "../shared/components/AboutHEI/ActAndStatus";
import AnnualReports from "../shared/components/AboutHEI/AnnualReports";
import ConstUnits from "../shared/components/AboutHEI/ConstUnits";
import InstDev from "../shared/components/AboutHEI/InstDev";
import AcademicLeadership from "../shared/components/Administration/AcademicLeadership";
import BoardofGovernors from "../shared/components/Administration/BoardofGovernors";
import ChiefVigilane from "../shared/components/Administration/ChiefVigilane";
import FinanceOfficer from "../shared/components/Administration/FinanceOfficer";
import InternalComplaints from "../shared/components/Administration/InternalComplaints";
import OmbudPerson from "../shared/components/Administration/OmbudPerson";
import AcaddemicCollab from "../shared/components/AcademicDetails/AcaddemicCollab";
import AcademicCalendar from "../shared/components/AcademicDetails/AcademicCalendar";
import AcademicProgram from "../shared/components/AcademicDetails/AcademicProgram";
import Departments from "../shared/components/AcademicDetails/Departments";
import DeptSchl from "../shared/components/AcademicDetails/DeptSchl";
import Statutes from "../shared/components/AcademicDetails/Statutes";
import AdmissionProcess from "../shared/components/Admission-Fee/AdmissionProcess";
import Prospecture from "../shared/components/Admission-Fee/Prospecture";
import FeeRefund from "../shared/components/Admission-Fee/FeeRefund";
import Overview from "../components/About/Overview";
import VisionandMission from "../components/About/VisionandMission";
import Management from "../components/About/Management";
import { Pdfdocuments } from "../shared/components/nirf/pdfdocuments";
import ProgrammeOfferedPage from "../components/Admission/ProgrammeOfferedPage";
import { UgcGuidelines } from "../shared/components/UGC/UGCguidelines";
import { AicteApproval } from "../shared/components/AICTE/AICTEApprovalCopy";
import { SexualHarassmentPrevention } from "../shared/components/SexualHarrasment/SexualHarrasment";
import Faculty from "../shared/components/Research/Faculty";
import { HrPolicy } from "../shared/components/hr-policy/hrpolicy";
import { RtiDocument } from "../shared/components/RTI/RTIDocument";
import { UgcMandatoryDisclosure } from "../shared/components/UGC/UGCmandatorydisclosure";
import OnlineregPage from "../components/Admission/OnlineregPage";
import GoverningCouncil from "../shared/components/AboutUs/GoverningCouncil";
import AllUpdatesView from "../shared/components/Home/AllUpdatesView";
import { AicteMandatoryDisclosure } from "../shared/components/AICTE/AICTEMandatorydisclosure";
import { AdmissionRefundPolicy } from "../shared/components/admission/AdmissionRefundPolicy";
import { HostelSection } from "../shared/components/facilities/Hostel";
import { LibrarySection } from "../shared/components/facilities/LibrarySection";
import { LaboratoriesSection } from "../shared/components/facilities/LaboratoriesSection";
import { LanguageLabSection } from "../shared/components/facilities/LanguageLabSection";
import { ConferenceHallsSection } from "../shared/components/facilities/ConferenceHallsSection";
import { TransportSection } from "../shared/components/facilities/TransportSection";
import { CommonRoomSection } from "../shared/components/facilities/CommonRoomSection";
import { DivyangjanFacilitiesSection } from "../shared/components/facilities/DivyangjanFacilitiesSection";
import { RenewableEnergySection } from "../shared/components/facilities/RenewableEnergySection";
import ResearchFacilitiesSection from "../shared/components/Research/ResearchFacilitiesSection";
import ResearchDevelopmentCellSection from "../shared/components/Research/ResearchDevelopmentCellSection";
import { AdmissionFeesStructure } from "../shared/components/admission/AdmissionFeesStructure";
import { AdmissionBrochureSection } from "../shared/components/admission/AdmissionBrochureSection";
import { ScholarshipSection } from "../shared/components/admission/ScholarshipSection";
import { AdmissionProcedureSection } from "../shared/components/admission/AdmissionProcedureSection";
import { NaacCertificateSection } from "../shared/components/NaacAccreditationSection/NaacCertificateSection";
import ExamCell from "../shared/components/cell/Cell2";
import { PermanentAffiliationSection } from "../shared/components/AnnaUniversity/PermanentAffiliationSection";
import GrievancePortal from "../shared/components/GrievancePortal/GrievancePortal";
import AICTEGuidelines from "../shared/components/AICTE/AICTEGuidelines";

export default function Approuter() {

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route element={<Main />}>
                        <Route path='/' element={<Hompage />} />

                        <Route path='/aboutus' element={<AboutusPage />} />
                        <Route path='/act-status' element={<ActAndStatus />} />
                        <Route path='/accrediation' element={<Accrediation />} />
                        <Route path='/annual-reports' element={<AnnualReports />} />
                        <Route path='/constituent-units' element={<ConstUnits />} />
                        <Route path='/institutional-development' element={<InstDev />} />

                        <Route path='/academic-leadership' element={<AcademicLeadership />} />
                        <Route path='/board-governors' element={<BoardofGovernors />} />
                        <Route path='/chief-vigilance' element={<ChiefVigilane />} />
                        <Route path='/finance-officer' element={<FinanceOfficer />} />
                        <Route path='/internal-complaint' element={<InternalComplaints />} />
                        <Route path='/ombudperson' element={<OmbudPerson />} />

                        <Route path='/academic-collab' element={<AcaddemicCollab />} />
                        <Route path='/academic-calendar' element={<AcademicCalendar />} />
                        <Route path='/academic-program' element={<AcademicProgram />} />
                        <Route path='/departments' element={<Departments />} />
                        <Route path='/deptschl' element={<DeptSchl />} />
                        <Route path='/statutes' element={<Statutes />} />

                        <Route path='/admission-process' element={<AdmissionProcess />} />
                        <Route path='/fee-refund-policy' element={<FeeRefund />} />
                        <Route path='/prospecture' element={<Prospecture />} />

                        <Route path='/department/:shortname?' element={<DepartmentPage />} />
                        {/* <Route path='/facilities/:id?' element={<FacilitiesPage />} /> */}
                        <Route path='/facilities/hostel' element={<HostelSection />} />
                        <Route path='/facilities/library' element={<LibrarySection />} />
                        <Route path='/facilities/laboratories-intenetlab' element={<LaboratoriesSection />} />
                        <Route path='/facilities/language-lab' element={<LanguageLabSection />} />
                        <Route path='/facilities/conference' element={<ConferenceHallsSection />} />
                        <Route path='/facilities/transport' element={<TransportSection />} />
                        <Route path='/facilities/commonroom' element={<CommonRoomSection />} />
                        <Route path='/facilities/accessibility' element={<DivyangjanFacilitiesSection />} />
                        <Route path='/facilities/renewable' element={<RenewableEnergySection />} />




                        <Route path='/cell/:shortname?' element={<CellPage />} />
                        <Route path='/examcell/:id?' element={<Cell2 />} />
                         {/* Main ExamCell route - shows all tabs, defaults to calendar */}
                         <Route path="/examcell" element={<ExamCell />} />
                      {/* Specific tab routes */}
                      <Route path="/examcell/:tabId" element={<ExamCell />} />
                    {/* Legacy routes that redirect to specific tabs */}
                    <Route path="/regulation" element={<Navigate to="/examcell/regulations" replace />} />
                     <Route path="/curriculum-syllabus" element={<Navigate to="/examcell/curriculam" replace />} />
                        <Route path='/committee/:shortname?' element={<CommittesPage />} />
                        <Route path='/tiet-alumni' element={<AlumniPage />} />
                        <Route path='/placement-cell' element={<PlacementPage />} />
                        <Route path='/contactus' element={<ContactusPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/verify-otp" element={<VerifyOtp />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path='/naac-accrediation' element={<Naac />} />
                        <Route path='/naac-certificate' element={<NaacCertificateSection />} />
                        <Route path='/nisp' element={<Nisppage />} />
                        <Route path='/stakeholder' element={<StakeHolderPage />} />
                        <Route path='/all-updates' element={<AllUpdatesPage />} />
                        <Route path='/all-updates/:id?' element={<AllUpdatesView />} />
                        <Route path='/overview' element={<Overview />} />
                        <Route path='/vision-mission' element={<VisionandMission />} />
                        <Route path='/board-of-management' element={<Management />} />
                        <Route path='/principal-message' element={<PrincipalPage />} />
                        <Route path='/hr-policy' element={<HrPolicy />} />
                        <Route path='/governing-council' element={<GoverningCouncil />} />

                        

                        <Route path='/gallery' element={<GalleryPage />} />
                        <Route path='/notification-view/:id' element={<NotificationView />} />
                        <Route path='/view-event/:Type/:Year' element={<ViewEventsPage />} />

                        {/* NIRF */}
                        <Route path='/pdf-documents' element={<Pdfdocuments />} />
                        
                        {/* Admission */}
                        <Route path='/programme-offered' element={<ProgrammeOfferedPage />} />
                         <Route path='/online-registration' element={<OnlineregPage />} />
                         <Route path='/refund-policy' element={<AdmissionRefundPolicy />} />
                         <Route path='/fees-structure' element={<AdmissionFeesStructure />} />
                        <Route path='/admission-brochure' element={<AdmissionBrochureSection />} />
                        <Route path='/admission-procedure' element={<AdmissionProcedureSection />} />
                        <Route path='/scholarship' element={<ScholarshipSection/>} />
  
                        {/* UgcGuidelines */}
                        <Route path='/ugc-guidelines' element={<UgcGuidelines />} />
                        <Route path='/ugc-mandatory-disclosure' element={<UgcMandatoryDisclosure />} />
                        <Route path='/rti' element={<RtiDocument />} />
 
                       {/* AicteApproval */}
                        <Route path='/aicte-approval-copy' element={<AicteApproval />} />
                        <Route path='/aicte-guidelines' element={<AICTEGuidelines />} />
                        <Route path='/aicte-mandatory-disclosure' element={<AicteMandatoryDisclosure />} />
                        <Route path='/posh' element={<SexualHarassmentPrevention />} />

                        {/* Research */}
                        <Route path='/faculty' element={<Faculty />} />
                        <Route path='/r&d-facilities' element={<ResearchFacilitiesSection />} />
                        <Route path='/r&d-department' element={<ResearchDevelopmentCellSection/>} />

                        { /* Anna University */}
                        <Route path='/permanant-affiliation' element={<PermanentAffiliationSection/>} />
                        <Route path='/grievance-portal' element={<GrievancePortal/>} />

                        


                    </Route>
                    <Route
                        path="/dashboard/*"
                        element={
                            <ProtectedRoute allowedRoles={['Admin']}>
                                <AdminRouter />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
                <PrelineScript />
            </BrowserRouter>
        </>
    )
}