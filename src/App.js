import './App.css'; //removed
import LoginMain from "./LoginMain";
import CSignUp1 from "./CSignUp1";
import CSignUp2 from './CSignUp2';
import CSignUp3 from './CSignUp3';
import SSignUp1 from './SSignUp1';
import SSignUp2 from './SSignUp2';
import SSignUp3 from './SSignUp3';
import CDashboard from './CDashboard';
import ADashboard from './ADashboard';
import SDashboard from './SDashboard';
import CBook1 from './CBook1';
import CBook2 from './CBook2';
import CAcc from './CAcc';
import SAcc from './SAcc';
import AReports from './AReports';
import { useState } from 'react';
import SignUpContext from "./context/signupdata/SignUpContext";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PwdChange from './PwdChange';


function App() {


  const SignUp = {
    "fname": "",
    "lname": "",
    "email": "",
    "phone": "",
    "password": "",
    "area": "",
    "token": ""
  }

  const Booking = {
    "item": "",
    "area": "",
    "qty": ""
  }

  const jsondonor = [];
  const jsondoctor = [];
  let suppliers = [];

  const [details, setDetails] = useState(SignUp)
  const [booking, setBooking] = useState(Booking)

  const [jsondonorupdate, setJsondonorUpdate] = useState(jsondonor)
  const [jsondoctorupdate, setJsondoctorUpdate] = useState(jsondoctor)

  const [sortedsuppliers, setSortedSuppliers] = useState(suppliers)




  return (

    <SignUpContext.Provider value={{ details, setDetails, jsondonorupdate, setJsondonorUpdate, jsondoctorupdate, setJsondoctorUpdate, sortedsuppliers, setSortedSuppliers, booking, setBooking }}>

      <Router>
        <div>
          <Routes>

            <Route path="/admin" element={<ADashboard />} />

            <Route path="/reports" element={<AReports />} />

            <Route path="/" element={<LoginMain />} />

            <Route path="/pwd-chng" element={<PwdChange />} />

            <Route path="/customer-signup" element={<CSignUp1 />} />

            <Route path="/customer-signup2" element={<CSignUp2 />} />

            <Route path="/customer-signup3" element={<CSignUp3 />} />

            <Route path="/customer" element={<CDashboard />} />

            <Route path="/c-account" element={<CAcc />} />

            <Route path="/book1" element={<CBook1 />} />

            <Route path="/book2" element={<CBook2 />} />

            <Route path="/supplier-signup" element={<SSignUp1 />} />

            <Route path="/supplier-signup2" element={<SSignUp2 />} />

            <Route path="/supplier-signup3" element={<SSignUp3 />} />

            <Route path="/supplier" element={<SDashboard />} />

            <Route path="/s-account" element={<SAcc />} />

          </Routes>
        </div>
      </Router >
    </SignUpContext.Provider>

  );
}

export default App;
