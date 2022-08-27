import ExperienceUI from "../../UI/Experience";
import ExperienceWrapper from "../../UI/StyleWrappers/ExperienceWrapper";

const hclExperience = [
  `Working on developing features in backend projects (node.js
    micro-service architecture), front-end (TypeScript, React) and
    DevOps (creating CI/CD pipelines for deployment of our client
    microservices to Google App Engine, Cloud Run, kubernetes on Google
    Cloud Platform)`,
  `Developing and maintaining automated CI/CD pipelines for code
    deployment using Github actions and Jenkins.`,
  `Working on automation builds, deployments, validations and
    configurations in the Google Cloud Platform environment.`,
  `Provisioning infrastructure, servers of GCP and deploying features
    using Terraform.`,
];

const Experience = () => {
  return (
    <ExperienceWrapper>
      <h3>Experience</h3>
      <ExperienceUI
        companyName="HCL Technologies"
        periodDate="March 2021 - present"
        companyWebLink="https://www.hcltech.com/"
        companyWebSite="hcltech.com"
        position="Software Engineer"
        tagline=" Working on designing, developing features and automating the
        deployments for our client products using Google Cloud Platform and DevOps,
        Cloud-Native technologies."
        workList={hclExperience}
      />
    </ExperienceWrapper>
  );
};
export default Experience;
