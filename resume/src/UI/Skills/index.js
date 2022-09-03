import Skill from "./Skill";
import styles from "./style.module.css";
import SectionTitle from "../StyleWrappers/SectionTitle";
const Skills = ({ skills }) => {
  return (
    <div>
      <div className={styles.skills}>
        <SectionTitle>Skills</SectionTitle>
        <div className={styles.skillsmain_section}>
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
