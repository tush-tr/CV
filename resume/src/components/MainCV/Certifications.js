import CertificationUI from "../../UI/Certification";

const certificationsList = [
  {
    name: "Hackerrank Skill Certifications: Python, JavaScript, React",
    link: "https://www.hackerrank.com/tush_tr",
  },
  {
    name: "Docker Essentials, Kubernetes Essentials, Python badges by IBM.",
    link: "https://www.credly.com/users/tushar-rajpoot/badges",
  },
  {
    name: "Google Cloud Qwiklabs badges",
    link: "https://partner.cloudskillsboost.google/public_profiles/05b7760f-154e-4d97-a68e-471fee67d2ad",
  },
];

const Certifications = () => {
  return <CertificationUI certificationsList={certificationsList} />;
};
export default Certifications;
