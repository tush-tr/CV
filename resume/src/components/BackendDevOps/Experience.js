import ExperienceUI from "../../UI/Experience";
import ExperienceWrapper from "../../UI/StyleWrappers/ExperienceWrapper";

const hclExperience = [
  `Working on developing features in backend projects (node.js
    micro-service architecture)`,
  `Building CI/CD pipelines for deployment of our client
    microservices to Google App Engine, Cloud Run, kubernetes on Google
    Cloud Platform(GCP).`,
  `Developing and maintaining automated CI/CD pipelines for code
    deployment using Github actions and Jenkins.`,
  `Integrating Monitoring tools, Security Scanners with Github Actions workflows.`,
  `Integrating Hashicorp Vault with Node.js applications, Google Cloud Platform(GCP) and Github Actions for managing secrets.`,
  `Developed automation frameworks for managing Google Cloud(GCP) Infrastructure like Cloud Schedulers, Big Query views, scheduled queries using Terraform, Node.js and Github Actions`,
  `Writing Dockerfiles and dockerizing node.js, React based applications for deploying to Google Cloud Run.`,
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
        deployments for applications with millions of users, using Google Cloud Platform and
        Cloud-Native technologies."
        workList={hclExperience}
      />
    </ExperienceWrapper>
  );
};
export default Experience;
