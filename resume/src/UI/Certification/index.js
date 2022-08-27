import SectionTitle from "../StyleWrappers/SectionTitle";
const Certification = ({ certificationsList }) => {
  return (
    <div className="resume-section certifications">
      <SectionTitle>Certifications</SectionTitle>
      <ul>
        {certificationsList.map(({ name, link }) => (
          <li>
            <a href={link}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Certification;
