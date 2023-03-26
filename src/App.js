import { Route, Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Curriculum from './domains/Curriculum/Curriculum';
import Setting from './domains/Setting/Setting';
import EditCurriDetail from './domains/Curriculum/EditCurriDetail.js';
import CalendarMain from './domains/Calendar/CalendarMain';
import CalendarUpdate from './domains/Calendar/CalendarUpdate';
import NewCalendar from './domains/Calendar/NewCalendar';
import Customers from "./domains/Customers/Customers.js";
import CustomerInfo from "./domains/Customers/CustomerInfo.js";
import CustomerEdit from "./domains/Customers/CustomerEdit.js";
import Journal from "./domains/Customers/Journal/Journal.js";
import JournalEdit from "./domains/Customers/Journal/JournalEdit.js";
import Dashboard from './domains/Dashboard/Dashboard.js';
import Commodity from './domains/Commodity/Commodity.js';
import Members from './domains/Members/Members.js';
import MemberInfo from './domains/Members/MemberInfo.js';
import CoachInfo from './domains/Members/CoachInfo.js';
import NewCustomer from './domains/Customers/NewCustomer.js';
import PaymentInfo from './domains/Customers/PaymentInfo.js';
import ProductDetail from './components/product/Detail.js';
import FcHome from './pages/FcHome.js';
import FcDashboard from './domains/forCustomers/FcDashboard.js';
import FcLoginPage from './pages/FcLoginPage';
import FcRegisterPage from './pages/FcRegisterPage';
import FcJournal from "./domains/forCustomers/FcJournal.js";
import JournalTable from "./domains/Customers/Journal/JournalTable";
import NewJournal from "./domains/Customers/Journal/NewJournal.js";
import EditPaymentInfo from "./domains/Customers/EditPaymentInfo";
import CJournalEdit from "./domains/Customers/Journal/CJornalEdit";
import FcJournalView from "./domains/forCustomers/FcJournalView";
import FcConsultView from "./domains/forCustomers/FcCousultView";

const App = () => {
  return (
       
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/home" element={<Home />} >
        <Route path="/home/login" element={<LoginPage />} />
        <Route path="/home/register" element={<RegisterPage />} />
        <Route path="/home/curriculum/edit" element={<EditCurriDetail />} />
        <Route path="/home/curriculum" element={<Curriculum />} />
        <Route path="/home/setting" element={<Setting />} />
        <Route path="/home/calendar" element={<CalendarMain />}/>
        <Route path="/home/calendar/update" element={<CalendarUpdate />} />
        <Route path="/home/calendar/new" element={<NewCalendar />} />
        <Route path="/home/customers" element={<Customers />} />
        <Route path="/home/customers/info" element={<CustomerInfo />} />
        <Route path="/home/customers/infoedit" element={<CustomerEdit />} />
        <Route path="/home/customers/new" element={<NewCustomer />} />
        <Route path="/home/customers/paymentinfo" element={<PaymentInfo />} />
        <Route path="/home/customers/paymentinfo/edit" element={<EditPaymentInfo />} />
        <Route path="/home/journaltable" element={<JournalTable />} />
        <Route path="/home/newjournal" element={<NewJournal />} />
        <Route path="/home/journal" element={<Journal />} />
        <Route path="/home/journal/edit" element={<JournalEdit/>} />
        <Route path="/home/journal/counseledit" element={<CJournalEdit />} />
        <Route path="/home/dashboard" element={<Dashboard />} />
        <Route path="/home/commodity" element={<Commodity />} />
        <Route path="/home/commodity/detail" element={<ProductDetail/>} />
        <Route path="/home/members" element={<Members />} />        
        <Route path="/home/members/info" element={<MemberInfo />} />
        <Route path="/home/members/coachinfo" element={<CoachInfo />} />
        
      </Route>

      <Route path="/fc" element={<FcHome />} >
        <Route path="/fc/dashboard" element={<FcDashboard />} />
        <Route path="/fc/journal" element={<FcJournal />} />
        <Route path="/fc/journal/view" element={<FcJournalView />} />
        <Route path="/fc/journal/consultview" element={<FcConsultView />} />
        <Route path="/fc/login" element={<FcLoginPage />} />
        <Route path="/fc/register" element={<FcRegisterPage />} />
      </Route>
    </Routes>
  );
};
export default App;
