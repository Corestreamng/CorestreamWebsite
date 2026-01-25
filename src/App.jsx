import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Header from "./component/header"
import Hero from "./component/hero";
import Tech from "./component/tech"
import Section2 from "./component/section2";
import Section3 from "./component/section3";
import Section4 from "./component/section4";
import Section5 from "./component/section5";
import Section6 from "./component/section6";
import Section7 from "./component/section7";
import Section8 from "./component/section8";
import Section9 from "./component/section9"
import Footer from "./component/footer"
import White from "./component/white"
import About from "./pages/about";
import About2 from "./component/about2"
import About3 from "./component/about3"
import About4 from "./component/about4"
import About5 from "./component/about5"
import About6 from "./component/about6"
import About7 from "./component/about7"
import About8 from "./component/about8"
import Client from "./pages/client"
import Client2 from "./component/client2"
import Client3 from "./component/client3"
import Client4 from "./component/client4"
import Service from "./pages/service";
import Community from "./pages/community";
import Community2 from "./component/community2";
import Community3 from "./component/community3";
import Contact from "./pages/contact";
import Tech2 from "./component/tech2"
import Contact2 from "./component/contact2";
import Contact3 from "./component/contact3";
import Contact4 from "./component/contact4";
import Career from "./pages/career"
import Career2 from "./component/career2"
import Career3 from "./component/career3"
import Career4 from "./component/career4"
import Career5 from "./component/career5"
import Career6 from "./component/career6"
import Career7 from "./component/career7"
import Career8 from "./component/career8"
import Career9 from "./component/career9"
import Blog from "./pages/blog";
import Blog2 from "./component/blog2";
import Blog3 from "./component/blog3";






function AppContent() {
  return (
    <>
      <Routes>
                
        <Route
        path=""
        element={
         <>
          <Hero/>
          <Section2/>
         <Section3/>
         <Section4/>
         <Section5/>
         <Section6/>
         <Section7/>
         <Section8/>
         <Section9/>
           <Footer/>  
         </>
        } />

         <Route path="/about" element={
         <>
         <About/>
         <About2/>
         <About3/>
         <About4/>
         <About5/>
         <About6/>
         <About7/>
         <About8/>
         <Section8/>
         <Section9/>
         <Footer/> 
         </>
          } />

          <Route path="/client" element={
           <>
         <Client/>
         <Client2/>
         <Client3/>
         <Client4/>
         <Section8/>
         <Section9/>
         <Footer/> 
          </>
        }/>

         <Route path="/service" element={<>
         <Service/>
         <Section8/>
         <Section9/>
         <Footer/> 
           </>}/>
           <Route path="/community" element={<>
           <Community/>
           <Community2/>
            <Community3/>
            <Section8/>
         <Section9/>
         <Footer/> 
           </>}/>

           <Route path="/contact" element={
            <>
          <Contact/>     
          <Contact2/>  
          <Contact3/>  
          <Contact4/> 
          <Section8/>
          <Section9/>
          <Footer/>                              
           </>}/>

           <Route path="/career" element={
            <>
                 <Career/>
                 <Career2/>
                 <Career3/>
                 <Career4/>
                 <Career5/>
                 <Career6/>
                 <Career7/>
                 <Career8/>
                 <Career9/>
                 <Section8/>
                 <Section9/>
                 <Footer/> 
           </>}
           />

           <Route path="/blog" element={
              <>
              <Blog/>
              <Blog2/>
              <Blog3/>
              <Section8/>
              <Section9/>
              <Footer/>
              </>
             }/>

      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
