import ExperienceUI from "../../UI/Experience";
import ExperienceWrapper from "../../UI/StyleWrappers/ExperienceWrapper";

const hclDevOpsExperience = [
  `Working on developing features in backend projects (node.js
      micro-service architecture)`,
  `Developing and maintaining automated CI/CD pipelines for code deployment of our client
      microservices to Google App Engine, Cloud Run, kubernetes on Google
      Cloud Platform(GCP) using Github Actions.`,
  `Working on code scanning tools like Sonarqube, Blackduck, Polaris.`,
  `Integrating Hashicorp Vault with Node.js applications, Google Cloud Platform(GCP) and Github Actions for managing secrets.`,
  `Developed automation frameworks for managing Google Cloud(GCP) Infrastructure like Cloud Schedulers, Big Query views, scheduled queries using Terraform, Node.js and Github Actions`,
  `Writing Dockerfiles and dockerizing node.js, React based applications for deploying to Google Cloud Run.`,
  `Working on automation builds, deployments, validations and
      configurations in the Google Cloud Platform environment.`,
  `Provisioning infrastructure, servers of GCP and deploying features
      using Terraform.`,
];
const hclSupportExperience = [
  `Collaborated with market DMLs to work on data quality issues, identifying the bugs and work along with product team for the fix.`,
  `Created pub/sub subscriptions for consumers, using auth0 to create M2M applications for consumers and Postman for testing APIs.`,
  `Used BigQuery to fetch consumer data for troubleshoot the issue.`,
  `Worked along with Data Analytics team to gather required data using BigQuery/Spanner.`,
  `Actively interacted with clients to gather requirements and working on solutions.`,
  `Created M2M applications on auth0 and managed monitoring using auth0.`
];

const Experience = () => {
  return (
    <ExperienceWrapper>
      <h3>Experience</h3>
      <ExperienceUI
        companyName="HCL Technologies"
        periodDate="Nov 2021 - present"
        companyWebLink="https://www.hcltech.com/"
        companyWebSite="hcltech.com"
        position="Software Engineer"
        tagline=<span>
          Project: IKEA DevOps
          <br />
          Working on designing, developing features and automating the
          deployments for our client products using Google Cloud Platform and
          Cloud-Native technologies.
          <br />
          Tech used: Google Cloud Platform(IAM, App Engine, Cloud Run, GKE, Big
          Query, Cloud Schedulers), Terraform, Docker, Git, Github Actions,
          Python, Nodejs.
        </span>
        // tagline="Working on designing, developing features and automating the deployments for our client products using Google Cloud Platform and Cloud-Native technologies."
        workList={hclDevOpsExperience}
      />
      <ExperienceUI
        companyName="HCL Technologies"
        periodDate="March 2021 - Oct 2021"
        companyWebLink="https://www.hcltech.com/"
        companyWebSite="hcltech.com"
        // position="Software Engineer"
        tagline=<span>
          Project: IKEA Engineering Support(Customer Engagement)
          <br />
          Handling operational activities for 24 products.
          <br />
          Tech used: Google Cloud Platform(Big Query, Cloud Spanner, Cloud storage, Dataflow jobs, logging, IAM, Pub/Sub, Cloud functions), Auth0, Splunk, Postman.       </span>
        // tagline="Working on designing, developing features and automating the
        // deployments for our client products using Google Cloud Platform and
        // Cloud-Native technologies."
        workList={hclSupportExperience}
      />
    </ExperienceWrapper>
  );
};
export default Experience;
