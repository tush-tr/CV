import styles from "./style.module.css";
const Skill = ({ skillDescription, skillHeading, skillNames }) => {
  const skillDescriptionElement =
    skillDescription !== "" ? (
      <span className={styles.skill_description}>({skillDescription})</span>
    ) : (
      ""
    );
  console.log(skillDescription, skillHeading);
  return (
    <li>
      <b>{skillHeading}</b>
      <span className={styles.skill_names}>{skillNames}{" "}</span>
      {skillDescriptionElement}
    </li>
  );
};

export default Skill;
