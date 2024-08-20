import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header"
import About_Us from "./Components/About_Us"
import Our from "./Components/Our_Room"
import Footer from "./Components/Footer"






export default function App() {
  return (
    <div>
      
      <Header/>
      <About_Us />
      <Our />
      <Footer />

      
      
    </div>
  )
}


