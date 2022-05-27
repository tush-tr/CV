import "./skills.css";
import Skill from "./skill";
import skills from "./skillslist";
const Skills = () => {
  return (
    <div>
      <div className="resume-section skills">
        <h3 className="resume-section-title">Skills</h3>
        <div className="resume-section-content">
          <ul>
            {skills.map(({ heading, description, names }) => (
              <Skill
                skillHeading={heading}
                skillDescription={description}
                skillNames={names}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
