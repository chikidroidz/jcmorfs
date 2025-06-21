import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiC, SiPhp } from "react-icons/si";
import Footer from "./components/Footer";
import About from "./components/About";

import avatar from "./assets/images/2x2.jpg";
import ToolsSection from "./components/ToolsSection";
function App() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: 90 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 80 },
    { name: "JavaScript", icon: <FaJsSquare />, level: 88 },
    { name: "PHP", icon: <SiPhp />, level: 75 },
    { name: "C", icon: <SiC />, level: 70 }, // Added C language here
  ];

  const jobs = [
    {
      company: "Philippine Navy",
      position: "Military Information Technology Specialist",
      startDate: "Apr 2022",
      endDate: "March 2025",
      location:
        "Naval Station Jose V. Andrada, 2335 Pres. M. Roxas Boulevard, Manila",
      description:
        "Maintained websites, assisted with bug fixes, and contributed to UI improvements using HTML, CSS, and JavaScript.",
    },
    {
      company: "Densto Techno Philippines",
      position: "Software Engineer",
      startDate: "August 2019",
      endDate: "April 2022",
      location:
        "SM JAZZ Residences, Jupiter Corner N. Garcia Streets, Bel-Air Village, Makati City, Metro Manila",
      description:
        "Developed user-friendly React apps, optimized performance, collaborated with designers and backend developers.",
    },
  ];
  return (
    <div className="w-full bg-[#253237]">
      <NavBar />

      <Hero />

      <About
        name="John Carlo Morfi"
        intro="IT professional with 6 years experience in software development and infrastructure. Worked as military IT in the Philippine Navy, and as a software engineer at Denso for industrial and automotive systems."
        skills={skills}
        jobs={jobs}
        avatarUrl={avatar}
        location="San Jose, Batangas"
        interests={[
          "Open Source",
          "Watching Movie",
          "Playing Basketball",
          "Cooking",
          "Gaming",
        ]}
      />

      {/* <ProjectsGallery /> */}
      <ToolsSection />

      {/* <Contact
        email="alex@example.com"
        linkedin="https://linkedin.com/in/alexdev"
        github="https://github.com/alexdev"
        twitter="https://twitter.com/alexdev"
        showMap={true}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!..." // Replace with your embed URL
      /> */}
      <Footer
        name="John Carlo Morfi"
        linkedin="https://linkedin.com"
        github="https://github.com/"
        twitter="https://twitter.com/"
        navLinks={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
    </div>
  );
}

export default App;
