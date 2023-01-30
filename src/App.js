import { Route, Routes } from 'react-router-dom';
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
import Message from "./domains/Message/Message.js";
import Dashboard from './domains/Dashboard/Dashboard.js';
import Commodity from './domains/Commodity/Commodity.js';
import Members from './domains/Members/Members.js';
import MemberInfo from './domains/Members/MemberInfo.js';
import CoachInfo from './domains/Members/CoachInfo.js';
import NewCustomer from './domains/Customers/NewCustomer.js';
import PaymentInfo from './domains/Customers/PaymentInfo.js';
import ProductDetail from './components/product/Detail.js';
import CalendarJisoo from './domains/Calendar/CalendarJisoo.js';
import FcHome from './pages/FcHome.js';
import FcDashboard from './domains/forCustomers/FcDashboard.js';
import FcLoginPage from './pages/FcLoginPage';
import FcRegisterPage from './pages/FcRegisterPage';
import FcJournal from "./domains/forCustomers/FcJournal.js";
import JournalTable from "./domains/Customers/Journal/JournalTable";
import NewJournal from "./domains/Customers/Journal/NewJournal.js";
import EditPaymentInfo from "./domains/Customers/EditPaymentInfo";
import CJournalEdit from "./domains/Customers/Journal/CJornalEdit";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/curriculum/edit" element={<EditCurriDetail />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/calendar" element={<CalendarMain />}/>
        <Route path="/calendar/update" element={<CalendarUpdate />} />
        <Route path="/calendar/new" element={<NewCalendar />} />
        <Route path="/calendar/jisoo" element={<CalendarJisoo />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/info" element={<CustomerInfo />} />
        <Route path="/customers/infoedit" element={<CustomerEdit />} />
        <Route path="/customers/new" element={<NewCustomer />} />
        <Route path="/customers/paymentinfo" element={<PaymentInfo />} />
        <Route path="/customers/paymentinfo/edit" element={<EditPaymentInfo />} />
        <Route path="/journaltable" element={<JournalTable />} />
        <Route path="/newjournal" element={<NewJournal />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/edit" element={<JournalEdit/>} />
        <Route path="/journal/counseledit" element={<CJournalEdit />} />
        <Route path="/message" element={<Message />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/commodity" element={<Commodity />} />
        <Route path="/commodity/detail" element={<ProductDetail/>} />
        <Route path="/members" element={<Members />} />        
        <Route path="/members/info" element={<MemberInfo />} />
        <Route path="/members/coachinfo" element={<CoachInfo />} />
      </Route>
      <Route path="/fc" element={<FcHome />} >
        <Route path="/fc/dashboard" element={<FcDashboard />} />
        <Route path="/fc/journal" element={<FcJournal />} />
        <Route path="/fc/login" element={<FcLoginPage />} />
        <Route path="/fc/register" element={<FcRegisterPage />} />
      </Route>
    </Routes>
  );
};
export default App;
