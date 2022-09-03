import SectionTitle from "../StyleWrappers/SectionTitle";
import Wrapper from "./Wrapper";
const Certification = ({ certificationsList }) => {
  return (
    <Wrapper>
      <SectionTitle>Certifications</SectionTitle>
      <ul>
        {certificationsList.map(({ name, link }) => (
          <li>
            <a href={link}>{name}</a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export default Certification;
