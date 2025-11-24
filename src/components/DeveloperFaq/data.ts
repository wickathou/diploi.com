import type { TDeveloperFaqItem } from './types';

const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

export const developerFaqItems: TDeveloperFaqItem[] = [
  {
    id: 'homepage-what-is-diploi',
    page: 'homepage',
    question: 'What is Diploi?',
    answer:
      'Diploi is a platform that combines cloud development environments and app hosting in a single place, and is meant to be an all-in-one solution where developers can scaffold applications from zero, start developing applications without a local setup using cloud development environments, which do not require any configuration work, and deploy staging and production environments instantly. All applications launched and hosted on Diploi come with a CI/CD pipeline setup by default, automatic SSL certificates, and zero-config cloud development environments.',
  },
  {
    id: 'homepage-code-storage',
    page: 'homepage',
    question: 'Where is my code stored, and how does Git integration work?',
    answer:
      'Your code lives in your own GitHub repository. Diploi configures a GitHub Action that triggers a CI/CD workflow that updates your staging and production environments, and is triggered when new updates are pushed to the repository linked to a project hosted in Diploi.',
  },
  {
    id: 'homepage-component-limits',
    page: 'homepage',
    question: 'Is there a limit to how many components or add-ons a project can have in Diploi?',
    answer:
      'There is no limit, so you can have all supported frameworks and databases supported by Diploi, the only limitation is the computing power required by a deployment to handle a large stack of components and add-ons.',
  },
  {
    id: 'homepage-vps-provider',
    page: 'homepage',
    question: 'Is Diploi a VPS provider?',
    answer:
      "No, Diploi is a fully managed development and deployment platform. You cannot choose the OS where your application is deployed, and you do not have configuration access to the server's settings.",
  },
  {
    id: 'homepage-ssh-access',
    page: 'homepage',
    question: 'Do I get SSH access to the servers where my project is hosted in Diploi?',
    answer:
      "Yes, Diploi uses Kubernetes to host your application's cloud development environment, components, and add-ons as individual pods, which you can access via SSH.",
  },
  {
    id: 'homepage-sharing',
    page: 'homepage',
    question: 'Can I share my application with others for testing?',
    answer: 'Yes, each environment has a unique URL you can share, so others can access and test your app instantly.',
  },
  {
    id: 'homepage-monitoring',
    page: 'homepage',
    question: 'How do I monitor logs or production status?',
    answer:
      "Diploi provides real-time logging for each component and add-on that is part of your application. Additionally, from the deployment's dashboard, you have access to graphs showing the resource usage of your app's cluster and its current health status. Additionally, all development deployments on Diploi come with a Diploi CLI, which gives you access to logs in real-time and can be used for programmatic log data tracking",
  },
  {
    id: 'homepage-move-off',
    page: 'homepage',
    question: 'What if I want to move off Diploi later?',
    answer:
      "You can move your project out of Diploi at any point. All Diploi projects can be run on any VPS or managed hosting service, either by running each component and add-on as you usually would do via terminal commands (eg. npm run start), or by using the Dockerfiles that Diploi generates for your app's components.",
  },
  {
    id: 'homepage-free-trial',
    page: 'homepage',
    question: 'Is there a free trial or credits?',
    answer:
      'When you sign up with GitHub, you receive €50 in free credits valid for 14 days. These credits let you explore Diploi fully without a credit card. After the trial, you only pay for the time that your application is online and the storage utilized. There are no additional costs or fees for extra services.',
  },
  {
    id: 'homepage-stack-builder',
    page: 'homepage',
    question: 'What is the Stack Builder in Diploi?',
    answer:
      'Stack Builder is a tool for scaffolding new apps. It can generate boilerplate code and project structure for common stacks. For example, you can pick frameworks and databases, and the Stack Builder will create a ready-to-launch application template. This jumpstarts new projects so you can begin coding immediately.',
  },
  {
    id: 'pricing-model',
    page: 'pricing',
    question: 'What is the pricing model of Diploi?',
    answer:
      'Diploi has a usage-based pricing model, where you only pay for the hours that your deployment is running and the storage used. This applies to development, testing, and production environments alike.',
  },
  {
    id: 'pricing-free',
    page: 'pricing',
    question: 'Can I use Diploi for free?',
    answer:
      'Yes, you can use Diploi free for 14 days when you register for first time. There are no upfront fees or credit card requirements. After that you need to add a valid payment method, because Diploi does not offer a free tier.',
  },
  {
    id: 'pricing-cost-examples',
    page: 'pricing',
    question: 'How much does a development or production environment cost?',
    answer:
      'Costs depend on the cluster size, storage needs, and the amount of time online per deployment. For example, a size M cluster (2 cores, 8gb ram), with 10gb of storage, and used for cloud development for 7 hours per workday, costs €9 per month. A smaller size S cluster (2 cores, 4gb ram), with 10gb of storage, meant for production and running full-time (24/7) would cost €21 per month.',
  },
  {
    id: 'pricing-enterprise',
    page: 'pricing',
    question: 'Are there enterprise plans?',
    answer:
      `Yes, we offer an Enterprise tier with tailored pricing and custom services. Enterprise customers get priority support, migration services, integration assistance, and the ability to add custom components to the platform. If you are interested, message us at hello@diploi.com or book a call with our team here ${calendlyUrl}.`,
  },
  {
    id: 'pricing-taxes',
    page: 'pricing',
    question: 'Are taxes or VAT included in these prices?',
    answer: 'No, listed prices do not include taxes or VAT. Taxes will be added according to your location.',
  },
  {
    id: 'dev-vibecoders',
    page: 'dev',
    question: 'Is Diploi for Developers or Vibecoders?',
    answer:
      'Diploi is built with developers in mind, as a way to simplify how apps with diverse stacks can be built and hosted without requiring complicated setups to allow context switching. That said, it is also designed to help casual users who are interested in Vibecoding as a way to build web applications, but it requires at least some familiarity with concepts like SSH and Git workflows to take advantage of all the features of Diploi.',
  },
  {
    id: 'dev-ide-support',
    page: 'dev',
    question: 'Which IDEs are supported on Diploi?',
    answer:
      'You have multiple options. Diploi has a built-in browser-based IDE, and you can also connect any IDE with support for SSH and devcontainers. By default, Diploi provides native support for VS Code and Cursor, but you can also connect to a Diploi cloud development environment by configuring a remote connection using SSH from Zed, Windsurf, and JetBrains IDEs.',
  },
  {
    id: 'dev-deploy',
    page: 'dev',
    question: 'How do I deploy my application on Diploi?',
    answer:
      'All applications kick-started in Diploi are deployed online by default and do not require any special configuration. If you have an existing project on GitHub, you can import it, and Diploi will generate the configuration necessary to host it online, but in some cases, this process might require some changes to work properly. If you are having issues, please reach out via email at hello@diploi.com or message us on Discord.',
  },
  {
    id: 'dev-team-collab',
    page: 'dev',
    question: 'How do teams collaborate on Diploi?',
    answer:
      "On Diploi, each project can have independent development deployments for each developer in a team. You can share a link to an environment and even access a teammate’s environment directly. Environments can be cloned and shared for previewing purposes. Onboarding a new developer is fast, requiring about 30 seconds to get them up and running, since there's no local configuration required or limitations based on the developer's OS of preference.",
  },
  {
    id: 'teams-integration',
    page: 'teams',
    question: 'Can Diploi integrate with our existing infrastructure?',
    answer:
      'Yes, for Enterprise clients, we provide support for on-premise and bring-your-own-cloud setups, so you can get the user experience that Diploi offers, while still running your current cloud.',
  },
  {
    id: 'teams-efficiency',
    page: 'teams',
    question: 'How does Diploi improve team efficiency?',
    answer:
      'By simplifying context switching, developers can move between projects using different configurations at ease, without requiring any time to customize their local environment, which also removes all "works on my machine" issues. Diploi also reduces handoff time, since projects can be transferred to clients without requiring any management for custom infrastructure configuration, helping teams minimize the amount of time spent to deliver a project.',
  },
  {
    id: 'teams-security',
    page: 'teams',
    question: 'What security measures does Diploi provide for teams?',
    answer:
      "Diploi keeps projects secure by default, since developers do not need to copy source code or credentials on their local machines, minimizing the exposure to data breaches. Access is centrally controlled (with unified auth and permissions), and each developer’s VM is isolated from others.",
  },
  {
    id: 'teams-permissions',
    page: 'teams',
    question: 'How are access and permissions managed?',
    answer:
      'Diploi provides central access control, so team leads can manage team permissions and authentication for all environments from a single dashboard. This means you have full visibility and control over who can access each project or environment.',
  },
  {
    id: 'teams-isolation',
    page: 'teams',
    question: 'How isolated are development environments?',
    answer:
      'Each developer in a team can get an individual cloud development environment. No environment shares processes, file systems, or credentials with another.',
  },
  {
    id: 'devops-infrastructure',
    page: 'devops',
    question: 'How is infrastructure configured on Diploi?',
    answer:
      'Diploi uses an Infrastructure-as-Code model where your entire stack is defined in a single YAML file (diploi.yaml). In this file, you list components, add-ons, and settings, which Diploi uses to automatically create development, staging, and production environments.',
  },
  {
    id: 'devops-gitops',
    page: 'devops',
    question: 'What is "GitOps" or "push to deploy" on Diploi?',
    answer:
      'GitOps on Diploi means Git is the single source of truth. As for "push to deploy", we mean that when you want to deploy an update, you simply push your code (`git push`), and Diploi automatically builds and deploys it across environments.',
  },
  {
    id: 'devops-ci-cd',
    page: 'devops',
    question: 'How are CI/CD pipelines automatically handled?',
    answer: ' Diploi pre-configures new and imported GitHub projects, with a GitHub Action that is generated based on the contents of the `diploi.yaml` file, which adds a CI/CD pipeline that updates development and staging/production deployments that belong to the project.',
  },
  {
    id: 'devops-preview',
    page: 'devops',
    question: 'Can I preview changes before production?',
    answer:
      'Yes, Diploi provides live endpoints for all deployments, which allows you to preview your applications.',
  },
  {
    id: 'devops-integrations',
    page: 'devops',
    question: 'Can we integrate Diploi with our current cloud setup?',
    answer: 'Yes, Diploi can be integrated with your existing infrastructure. Reach out to our team for more information.',
  },
  {
    id: 'devops-large-stacks',
    page: 'devops',
    question: 'Is Diploi suitable for large or complex stacks?',
    answer:
      'Yes, Diploi can run any application, but it might require some additional configuration. We provide migration services to run your existing projects on Diploi.',
  },
  {
    id: 'ai-meaning',
    page: 'ai',
    question: `What does "AI" mean in Diploi's context?`,
    answer:
      'Diploi supports AI tools throughout the development lifecycle while keeping you in control. Since each deployment is independent, you can use Diploi as a way to provision sandboxed environments to run AI-generated code.',
  },
  {
    id: 'ai-lock-in',
    page: 'ai',
    question: "Am I locked into Diploi's tools for AI?",
    answer:
      'No, you can use any editor or tool over SSH (including your existing tools) and optionally use Diploi’s AI features. It’s fully compatible with the workflows you already know.',
  },
  {
    id: 'ai-code-location',
    page: 'ai',
    question: 'Where does my code live, and can I still use my own repos?',
    answer:
      'Your code stays within your deployments, which can be synced with your own Git repository. You can always use your own Git repo, as long as it uses GitHub. We also support other Git providers, but it requires additional configuration, so please reach out to our team if you would like to use Diploi with a different Git solution like GitLab or GitBucket.',
  },
  {
    id: 'ai-open-source',
    page: 'ai',
    question: "Are Diploi's components and add-ons open source?",
    answer:
      "Yes, all of Diploi’s supported stack components and add-ons are open source and available on GitHub. You can inspect them and make suggestions for changes via GitHub issues or by making your own pull request. You can find them in our GitHub repository https://github.com/orgs/diploi/repositories",
  },
  {
    id: 'ai-editor-support',
    page: 'ai',
    question: 'Which code editors have special AI support?',
    answer:
      'Officially supported editors include VS Code and Cursor. In VS Code, you can use GitHub Copilot and agent mode, and in Cursor, you get autocomplete, chat, and agent features. You can also use any other IDE that supports remote SSH connection to connect to your development environments.',
  },
  {
    id: 'jobs-mission',
    page: 'jobs',
    question: "What is Diploi's mission?",
    answer:
      'Diploi is a company building a simple, scalable PaaS for cloud development. Our mission is to deliver a developer experience that looks and feels magical. We aim to redefine how devs code by removing the boring work involved in building web applications.',
  },
  {
    id: 'jobs-hiring',
    page: 'jobs',
    question: 'What kind of people is Diploi looking to hire?',
    answer:
      'At Diploi we hire people who are passionate about developer experience, scalability, and tackling hard problems. We value curiosity, drive, and love for challenges.',
  },
  {
    id: 'jobs-qualifications',
    page: 'jobs',
    question: 'Do I need to meet every listed qualification?',
    answer:
      'No, you don’t need to check every box. We are more interested in curious and driven people than in your accolades. If you’re eager and a quick learner, we want to hear from you, even if you don’t match every requirement.',
  },
  {
    id: 'jobs-application',
    page: 'jobs',
    question: 'What should I include in my application?',
    answer:
      'Along with your resume or CV, we ask for a short intro explaining your interest and any relevant projects or code you’ve worked on. Showing real examples of your work (eg. GitHub repos, demos) is especially helpful.',
  },
];
