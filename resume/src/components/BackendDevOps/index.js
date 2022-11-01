import Skills from "./Skills";
import Wrapper from "../../UI/Wrapper";
import Header from "./Header";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Certification from "./Certifications";
import Other from "./Other";
const CV = () => {
  return (
    <Wrapper>
      <div className="resume-inner">
        <Header />
        <hr/>
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certification />
        <Other />
      </div>
    </Wrapper>
  );
};
export default CV;
