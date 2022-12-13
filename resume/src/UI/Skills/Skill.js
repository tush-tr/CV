import styles from "./style.module.css";
const Skill = ({ skillDescription, skillHeading, skillNames }) => {
  const skillDescriptionElement =
    skillDescription !== "" ? (
      <span className={styles.skill_description}>({skillDescription})</span>
    ) : (
      ""
    );
  return (
    <li>
      <span className={styles.skill_heading}>{skillHeading}</span>
      <span className={styles.skill_names}>{skillNames}{" "}</span>
      {skillDescriptionElement}
    </li>
  );
};

export default Skill;
