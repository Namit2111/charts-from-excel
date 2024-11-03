import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import React from 'react'
import LandingPage from "./pages/LandingPage";
import FileUploadPage from "./pages/FileUploadPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<LandingPage/>}></Route>
        <Route path = "/upload" element={<FileUploadPage/> } ></Route>
      </Routes>
    </Router>
  )
}

export default App