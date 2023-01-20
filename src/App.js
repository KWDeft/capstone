import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import Curriculum from './domains/Curriculum/Curriculum';
import ViewCurriDetail from './domains/Curriculum/ViewCurriDetail';
import WriteCurriDetail from './domains/Curriculum/WriteCurriDetail';
import Setting from './domains/Setting/Setting';
import CurriTable from './domains/Curriculum/Table/TableMain';
import CurriTableCoach from './domains/Curriculum/Table/TableCoach';
import CalendarMain from './domains/Calendar/CalendarMain';
import CalendarUpdate from './domains/Calendar/CalendarUpdate';
import NewCalendar from './domains/Calendar/NewCalendar';
import Customers from "./domains/Customers/Customers.js";
import CustomerInfo from "./domains/Customers/CustomerInfo.js";
import CustomerEdit from "./domains/Customers/CustomerEdit.js";
import Message from "./domains/Message/Message.js";
import Dashboard from './domains/Dashboard/Dashboard.js';
import Commodity from './domains/Commodity/Commodity.js';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/@:username">
          <Route index element={<Home />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/curriculum/write" element={<WriteCurriDetail />} />
        <Route path="/curriculum/view" element={<ViewCurriDetail />} />
        <Route path="/curriculum/table" element={<CurriTable />} />
        <Route path="/curriculum/table/coach" elemen={<CurriTableCoach />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/calendar" element={<CalendarMain />}/>
        <Route path="/calendar/update" element={<CalendarUpdate />} />
        <Route path="/calendar/new" element={<NewCalendar />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/info" element={<CustomerInfo />} />
        <Route path="/customers/infoedit" element={<CustomerEdit />} />
        <Route path="/message" element={<Message />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/commodity" element={<Commodity />} />
      </Route>
    </Routes>
  );
};
export default App;
