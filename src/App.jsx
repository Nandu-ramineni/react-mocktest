import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import JeePhysics from "./JEEPhysics/JEEPhysics";
import JeeChemistry from "./JEEChemistry/JEEChemistry";
import JeeMaths from "./JEEMaths/JEEMaths";
import Gate from "./Gate/Gate";
import Tspsc from "./TSPSC/TSPSC";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import ExcitingCrashCoursesCarousel from "./Coursel";
import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";
import "./Style.css";
const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const components = [
    {
      name: "JEEPhysics",
      component: JeePhysics,
      image:
        "https://firebasestorage.googleapis.com/v0/b/nandu-1121a.appspot.com/o/physics.png?alt=media&token=3d0129fe-721b-44a1-a1ed-8209424f4afd",
    },
    {
      name: "JEEChemistry",
      component: JeeChemistry,
      image:
        "https://firebasestorage.googleapis.com/v0/b/nandu-1121a.appspot.com/o/chemistry.png?alt=media&token=830601e6-ef27-414e-addc-2135e99eff14",
    },
    {
      name: "JEEMaths",
      component: JeeMaths,
      image:
        "https://firebasestorage.googleapis.com/v0/b/nandu-1121a.appspot.com/o/maths.png?alt=media&token=76b99eea-5306-4dea-8113-452d1d077883",
    },
    {
      name: "Gate",
      component: Gate,
      image:
        "https://firebasestorage.googleapis.com/v0/b/nandu-1121a.appspot.com/o/Gate.png?alt=media&token=b348e6f0-0e11-4da4-8bcc-65c74d130137",
    },
    {
      name: "TSPSC",
      component: Tspsc,
      image:
        "https://firebasestorage.googleapis.com/v0/b/nandu-1121a.appspot.com/o/tspsc.png?alt=media&token=195d2569-084c-407c-b97b-69aa0c66e8b0",
    },
  ];

  const openComponent = (component) => {
    setActiveComponent(component.Navbar);
  };

  const renderComponent = (Component) => {
    return <Component />;
  };

  return (
    <Router>
      <div>
      <Navbar />
      <Routes>
          <Route path="/" />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Routes>
          {components.map((component, index) => (
            <Route
              key={index}
              path={`/${component.name}`}
              element={renderComponent(component.component)}
            />
          ))}
        </Routes>
        <div className="box">
          <h2>Select an Exquisite Test Component</h2>
          <ul>
            {components.map((component, index) => (
              <li key={index}>
                <Link
                  to={`/${component.name}`}
                  target="_blank"
                  onClick={() => openComponent(component.component)}
                >
                  <img src={component.image} alt={""} />{" "}
          
                  {component.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {activeComponent && (
          <div>
            <h2>Selected Component:</h2>
            {renderComponent(activeComponent)}
          </div>
        )}
        <ExcitingCrashCoursesCarousel />
        <div className="mocktest-duniya-description">
          <i className="fas fa-graduation-cap"></i>
          <h2>Discover the Mocktest Duniya Advantage</h2>
          <p>
          👉In the competitive world of exam preparation, Mocktest Duniya stands
            out as a beacon of commitment to your success. Our platform is
            designed with a singular focus - to provide you with a unique and
            effective learning experience. Whether you're gearing up for JEE,
            GATE, TSPSC, or any other competitive exam, Mocktest Duniya is your
            trusted ally on the path to excellence.
          </p>{" "}
          <br />
          <p>
          👉What sets us apart is our dedication to creating meticulously
            curated mock tests that closely mirror the real exam environment. We
            recognize the pivotal role of targeted practice in achieving
            success, and our platform is crafted to provide you with precisely
            that. Each mock test is a carefully designed opportunity for you to
            refine your skills, identify areas for improvement, and boost your
            confidence ahead of the actual examination.
          </p>
          <br />
          <p>
          👉At Mocktest Duniya, we pride ourselves on our team of experienced
            educators and professionals. They work tirelessly to ensure that our
            content is of the highest quality. Beyond providing a vast array of
            practice questions, our experts offer valuable insights and proven
            strategies to help you tackle even the most challenging exam
            questions. With Mocktest Duniya, you're not just preparing; you're
            learning from the best to be the best.
          </p>
          <br />
          <p>
          👉Joining Mocktest Duniya means embarking on a transformative journey
            towards success. Our commitment is not just to help you pass exams
            but to excel in them. No matter where you are in your preparation
            journey, Mocktest Duniya is here to guide you, support you, and
            empower you to achieve your academic goals. Start your preparation
            with us and experience the Mocktest Duniya advantage today.
          </p>
        </div>
        <AboutUs />
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
