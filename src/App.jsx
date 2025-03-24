import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import Policies from './pages/Policies';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Blogs from "./pages/Blogs";
import Courses from "./pages/Courses";
import Tranings from "./pages/Tranings";
import ServicesSection from "./pages/Services";
import Carear from "./pages/Carear";
import FaQ from "./pages/FaQ";
import AllServices from "./pages/MainPages/AllServices";
import AllProjects from "./pages/MainPages/AllProjects";
import AllBlogs from "./pages/MainPages/AllBlogs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesSection />} />
          {/* <Route path='/service-details' element={<ServiceDetails />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FaQ />} />
          {/* <Route path='/teams' element={<Teams />} /> */}
          <Route path="/blog" element={<Blogs />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/training" element={<Tranings />} />
          <Route path="/career" element={<Carear />} />
          <Route path="/all-services" element={<AllServices />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/all-projects" element={<AllProjects />} />
          {/* <Route path='/licenses' element={<Licenses />} /> */}
          {/* <Route path='/policies' element={<Policies />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
