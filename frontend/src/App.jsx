import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import React from 'react'
import LandingPage from "./pages/LandingPage";
import FileUploadPage from "./pages/FileUploadPage";
import DataVisualizationPage from "./pages/DataVisualizationPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<LandingPage/>}></Route>
        <Route path = "/upload" element={<FileUploadPage/> } ></Route>
        <Route path = "/visualization" element={<DataVisualizationPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App