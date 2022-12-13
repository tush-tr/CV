import ExperienceUI from "../../UI/Experience";
import ExperienceWrapper from "../../UI/StyleWrappers/ExperienceWrapper";
import Highlight from "../../UI/StyleWrappers/highlight";
const hclExperience = [
  `Working on developing features in backend projects (node.js
    micro-service architecture).`,
    <span>Building CI/CD pipelines for deployment of our client
    microservices to <Highlight>Google App Engine, Cloud Run, kubernetes on Google
    Cloud Platform(GCP)</Highlight>.</span>,
    <span>Developing and maintaining automated <Highlight>CI/CD</Highlight> pipelines for code
    deployment using <Highlight>Github actions</Highlight> and Jenkins.</span>,
  <span>Integrating Monitoring tools, Security Scanners with Github Actions workflows.</span>,
  <span>Integrating <Highlight>Hashicorp Vault</Highlight> with <Highlight>Node.js</Highlight> applications, <Highlight>Google Cloud Platform(GCP)</Highlight> and Github Actions for managing secrets.</span>,
  <span>Developed automation frameworks for managing <Highlight>Google Cloud(GCP)</Highlight> Infrastructure like Cloud Schedulers, Big Query views, scheduled queries using <Highlight>Terraform, Node.js and Github Actions.</Highlight></span>,
  <span>Writing <Highlight>Dockerfiles</Highlight> and dockerizing node.js, React based applications for deploying to <Highlight>Google Cloud Run.</Highlight></span>,
  <span>Working on automation builds, deployments, validations and
    configurations in the Google Cloud Platform environment.</span>,
  <span>Provisioning infrastructure, servers of GCP and deploying features
    using <Highlight>Terraform.</Highlight></span>,
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
        position="DevOps Engineer"
        tagline=" Working on designing, developing features and automating the
        deployments for applications with millions of users, using Google Cloud Platform and
        Cloud-Native technologies."
        workList={hclExperience}
      />
    </ExperienceWrapper>
  );
};
export default Experience;
