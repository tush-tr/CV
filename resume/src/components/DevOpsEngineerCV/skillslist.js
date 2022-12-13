import Highlight from "../../UI/StyleWrappers/highlight";
const skills = [
  {
    heading: "Programming Languages: ",
    names: <Highlight>JavaScript, TypeScript, Python, C/C++.</Highlight>,
    description: "",
  },
  {
    heading: "CSPs: ",
    names: (
      <span>
        <Highlight>Google Cloud Platform</Highlight> (IAM, Storage, Compute
        Engine, Monitoring, GKE, App Engine, Cloud Run, Big Query, Cloud
        Schedulers), <Highlight>AWS </Highlight>(EC2, ECR, S3, Beanstalk).<br/>
      </span>
    ),
    description: (
      <span>
        Managed deployments on GCP App Engine, Cloud Run of applications with
        millions of users.
      </span>
    ),
  },
  {
    heading: "CI/CD: ",
    names: (
      <span>
        Jenkins,<Highlight> Github Actions</Highlight>.
      </span>
    ),
    description:
      "Developed and maintained tens of CI/CD pipelines for automated code deployments to GCP and AWS.",
  },
  {
    heading: "IAC: ",
    names: <Highlight>Terraform.</Highlight>,
    description:
      "Proficient with writing Terraform scripts for provisioning GCP and AWS infrastructure.",
  },
  {
    heading: "Containerization: ",
    names: (
      <span>
        <Highlight>Docker</Highlight>, <Highlight>Kubernetes</Highlight>
        (Familiar).
      </span>
    ),
    description: "",
  },
  {
    heading: "OS: ",
    names: "Linux(Ubuntu, Debian, CentOS), MacOS, Windows",
    description: "",
  },
  {
    heading: "Development Technologies: ",
    names: "React, Node.js.",
    description: "",
  },
  {
    heading: "Databases: ",
    names: "NoSQL databases(MongoDB), SQL databases(MySQL,PostgreSQL).",
    description: "",
  },
  {
    heading: "Others: ",
    names: "Git, Github, Hashicorp Vault.",
    description: "",
  },
];
export default skills;
