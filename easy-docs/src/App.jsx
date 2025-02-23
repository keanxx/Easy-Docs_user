
import React from "react";
import './App.css'
import Header from './Components/Header'
import SignInPage from './Pages/SignInPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import ProfilePage from "./Pages/ProfilePage";
import GetCertification from "./Pages/GetCertification";
import HistoryPage from "./Pages/HistoryPage";
function App() {

  return (
    <>
      <Router>
     <Header/>
     <Routes>
     <Route path="/" element={<SignInPage/>}/>
     <Route path="/signUp" element={<SignUpPage/>}/>
     <Route path="/profile" element={<ProfilePage/>}/>
     <Route path="/getCertification" element={<GetCertification/>}/>
     <Route path="/history" element={<HistoryPage/>}/>
     </Routes>

     </Router>
    </>
  )
}

export default App
