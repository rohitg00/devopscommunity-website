import { Tool } from '../types/Tool';

export const tools: Tool[] = [
  // Container Orchestration
  {
    name: 'Kubernetes',
    description: 'Open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.',
    category: 'Container Orchestration',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://kubernetes.io',
    documentationUrl: 'https://kubernetes.io/docs/home/',
    githubUrl: 'https://github.com/kubernetes/kubernetes',
    tags: ['containers', 'orchestration', 'CNCF', 'cloud-native']
  },
  {
    name: 'Docker Swarm',
    description: 'Native clustering and orchestration solution for Docker.',
    category: 'Container Orchestration',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://docs.docker.com/engine/swarm/',
    documentationUrl: 'https://docs.docker.com/engine/swarm/',
    tags: ['containers', 'orchestration', 'docker']
  },
  {
    name: 'Nomad',
    description: 'Flexible workload orchestrator by HashiCorp to deploy and manage containers and non-containerized applications.',
    category: 'Container Orchestration',
    importance: 'Optional',
    isOpenSource: true,
    url: 'https://www.nomadproject.io/',
    githubUrl: 'https://github.com/hashicorp/nomad',
    tags: ['orchestration', 'hashicorp', 'containers']
  },

  // Container Runtime & Management
  {
    name: 'Docker',
    description: 'Platform for developing, shipping, and running applications in containers.',
    category: 'Container Runtime',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://www.docker.com',
    documentationUrl: 'https://docs.docker.com',
    githubUrl: 'https://github.com/docker',
    tags: ['containers', 'runtime', 'development']
  },
  {
    name: 'containerd',
    description: 'Industry-standard container runtime with an emphasis on simplicity, robustness, and portability.',
    category: 'Container Runtime',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://containerd.io/',
    githubUrl: 'https://github.com/containerd/containerd',
    tags: ['containers', 'runtime', 'CNCF']
  },
  {
    name: 'CRI-O',
    description: 'Lightweight container runtime specifically for Kubernetes.',
    category: 'Container Runtime',
    importance: 'Optional',
    isOpenSource: true,
    url: 'https://cri-o.io/',
    githubUrl: 'https://github.com/cri-o/cri-o',
    tags: ['containers', 'kubernetes', 'runtime']
  },
  {
    name: 'Podman',
    description: 'Daemonless container engine for developing, managing, and running OCI Containers.',
    category: 'Container Runtime',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://podman.io/',
    documentationUrl: 'https://docs.podman.io/',
    githubUrl: 'https://github.com/containers/podman',
    tags: ['containers', 'runtime', 'OCI']
  },
  {
    name: 'Buildah',
    description: 'Tool for building OCI container images.',
    category: 'Container Runtime',
    importance: 'Optional',
    isOpenSource: true,
    url: 'https://buildah.io/',
    githubUrl: 'https://github.com/containers/buildah',
    tags: ['containers', 'build', 'OCI']
  },

  // Continuous Integration
  {
    name: 'Jenkins',
    description: 'Open-source automation server for building, deploying, and automating any project.',
    category: 'Continuous Integration',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://www.jenkins.io',
    documentationUrl: 'https://www.jenkins.io/doc/',
    githubUrl: 'https://github.com/jenkinsci/jenkins',
    tags: ['CI/CD', 'automation', 'pipeline']
  },
  {
    name: 'GitLab CI',
    description: 'Part of GitLab that provides continuous integration services.',
    category: 'Continuous Integration',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://docs.gitlab.com/ee/ci/',
    documentationUrl: 'https://docs.gitlab.com/ee/ci/',
    tags: ['CI/CD', 'git', 'automation']
  },
  {
    name: 'CircleCI',
    description: 'Cloud-native continuous integration and delivery platform.',
    category: 'Continuous Integration',
    importance: 'Recommended',
    isOpenSource: false,
    url: 'https://circleci.com/',
    documentationUrl: 'https://circleci.com/docs/',
    tags: ['CI/CD', 'cloud', 'automation']
  },
  {
    name: 'Travis CI',
    description: 'Hosted continuous integration service used to build and test software projects.',
    category: 'Continuous Integration',
    importance: 'Recommended',
    isOpenSource: false,
    url: 'https://travis-ci.org/',
    documentationUrl: 'https://docs.travis-ci.com/',
    tags: ['CI/CD', 'testing', 'automation']
  },
  {
    name: 'Drone CI',
    description: 'Container-native continuous integration platform.',
    category: 'Continuous Integration',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://www.drone.io/',
    documentationUrl: 'https://docs.drone.io/',
    githubUrl: 'https://github.com/harness/drone',
    tags: ['CI/CD', 'containers', 'automation']
  },
  {
    name: 'Bamboo',
    description: 'Continuous integration and deployment tool by Atlassian.',
    category: 'Continuous Integration',
    importance: 'Optional',
    isOpenSource: false,
    url: 'https://www.atlassian.com/software/bamboo',
    documentationUrl: 'https://confluence.atlassian.com/bamboo',
    tags: ['CI/CD', 'atlassian', 'enterprise']
  },

  // Continuous Deployment
  {
    name: 'ArgoCD',
    description: 'Declarative continuous delivery tool for Kubernetes.',
    category: 'Continuous Deployment',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://argoproj.github.io/cd/',
    githubUrl: 'https://github.com/argoproj/argo-cd',
    tags: ['CD', 'kubernetes', 'GitOps']
  },
  {
    name: 'Spinnaker',
    description: 'Multi-cloud continuous delivery platform for releasing software changes.',
    category: 'Continuous Deployment',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://spinnaker.io/',
    githubUrl: 'https://github.com/spinnaker/spinnaker',
    tags: ['CD', 'multi-cloud', 'deployment']
  },
  {
    name: 'Flux',
    description: 'Tool for keeping Kubernetes clusters in sync with sources of configuration.',
    category: 'Continuous Deployment',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://fluxcd.io/',
    githubUrl: 'https://github.com/fluxcd/flux',
    tags: ['CD', 'kubernetes', 'GitOps']
  },

  // Infrastructure as Code
  {
    name: 'Terraform',
    description: 'Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently.',
    category: 'Infrastructure as Code',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://www.terraform.io',
    documentationUrl: 'https://www.terraform.io/docs',
    githubUrl: 'https://github.com/hashicorp/terraform',
    tags: ['IaC', 'cloud', 'provisioning']
  },
  {
    name: 'Ansible',
    description: 'Automation tool for configuration management, application deployment, and task automation.',
    category: 'Infrastructure as Code',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://www.ansible.com/',
    githubUrl: 'https://github.com/ansible/ansible',
    tags: ['automation', 'configuration', 'IaC']
  },
  {
    name: 'Pulumi',
    description: 'Modern infrastructure as code platform that allows you to use familiar programming languages.',
    category: 'Infrastructure as Code',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://www.pulumi.com/',
    githubUrl: 'https://github.com/pulumi/pulumi',
    tags: ['IaC', 'cloud', 'programming']
  },
  {
    name: 'AWS CDK',
    description: 'Framework for defining cloud infrastructure in code.',
    category: 'Infrastructure as Code',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://aws.amazon.com/cdk/',
    documentationUrl: 'https://docs.aws.amazon.com/cdk/',
    githubUrl: 'https://github.com/aws/aws-cdk',
    tags: ['aws', 'iac', 'cloud']
  },
  {
    name: 'Crossplane',
    description: 'Open source control plane to manage cloud infrastructure.',
    category: 'Infrastructure as Code',
    importance: 'Optional',
    isOpenSource: true,
    url: 'https://crossplane.io/',
    documentationUrl: 'https://crossplane.io/docs/',
    githubUrl: 'https://github.com/crossplane/crossplane',
    tags: ['kubernetes', 'cloud', 'iac']
  },

  // Monitoring & Observability
  {
    name: 'Prometheus',
    description: 'Open-source monitoring and alerting toolkit designed for reliability and scalability.',
    category: 'Monitoring & Observability',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://prometheus.io',
    documentationUrl: 'https://prometheus.io/docs/introduction/overview/',
    githubUrl: 'https://github.com/prometheus/prometheus',
    tags: ['monitoring', 'metrics', 'CNCF', 'alerting']
  },
  {
    name: 'Grafana',
    description: 'Open-source analytics and interactive visualization web application.',
    category: 'Monitoring & Observability',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://grafana.com/',
    githubUrl: 'https://github.com/grafana/grafana',
    tags: ['visualization', 'monitoring', 'dashboards']
  },
  {
    name: 'Datadog',
    description: 'Monitoring and analytics platform for developers and IT operations teams.',
    category: 'Monitoring & Observability',
    importance: 'Recommended',
    isOpenSource: false,
    url: 'https://www.datadoghq.com/',
    tags: ['monitoring', 'APM', 'analytics']
  },
  {
    name: 'Jaeger',
    description: 'End-to-end distributed tracing system.',
    category: 'Monitoring & Observability',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://www.jaegertracing.io/',
    documentationUrl: 'https://www.jaegertracing.io/docs/',
    githubUrl: 'https://github.com/jaegertracing/jaeger',
    tags: ['tracing', 'monitoring', 'CNCF']
  },
  {
    name: 'OpenTelemetry',
    description: 'Observability framework for cloud-native software.',
    category: 'Monitoring & Observability',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://opentelemetry.io/',
    documentationUrl: 'https://opentelemetry.io/docs/',
    githubUrl: 'https://github.com/open-telemetry',
    tags: ['observability', 'CNCF', 'monitoring']
  },

  // Security & Compliance
  {
    name: 'SonarQube',
    description: 'Platform for continuous inspection of code quality and security.',
    category: 'Security & Compliance',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://www.sonarqube.org/',
    githubUrl: 'https://github.com/SonarSource/sonarqube',
    tags: ['code-quality', 'security', 'analysis']
  },
  {
    name: 'Vault',
    description: 'Tool for secrets management, encryption as a service, and privileged access management.',
    category: 'Security & Compliance',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://www.vaultproject.io/',
    githubUrl: 'https://github.com/hashicorp/vault',
    tags: ['security', 'secrets', 'encryption']
  },
  {
    name: 'Trivy',
    description: 'Simple and comprehensive vulnerability scanner for containers and other artifacts.',
    category: 'Security & Compliance',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://aquasecurity.github.io/trivy/',
    githubUrl: 'https://github.com/aquasecurity/trivy',
    tags: ['security', 'containers', 'scanning']
  },
  {
    name: 'Snyk',
    description: 'Developer security platform for securing code, dependencies, containers, and infrastructure as code.',
    category: 'Security & Compliance',
    importance: 'Essential',
    isOpenSource: false,
    url: 'https://snyk.io/',
    documentationUrl: 'https://docs.snyk.io/',
    tags: ['security', 'dependencies', 'scanning']
  },
  {
    name: 'Aqua Security',
    description: 'Platform for securing container-based and cloud-native applications.',
    category: 'Security & Compliance',
    importance: 'Recommended',
    isOpenSource: false,
    url: 'https://www.aquasec.com/',
    documentationUrl: 'https://docs.aquasec.com/',
    tags: ['security', 'containers', 'cloud-native']
  },
  {
    name: 'Sealed Secrets',
    description: 'Kubernetes controller and tool for one-way encrypted Secrets.',
    category: 'Security & Compliance',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://sealed-secrets.netlify.app/',
    githubUrl: 'https://github.com/bitnami-labs/sealed-secrets',
    tags: ['kubernetes', 'secrets', 'security']
  },
  {
    name: 'External Secrets Operator',
    description: 'Kubernetes operator that integrates external secret management systems.',
    category: 'Security & Compliance',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://external-secrets.io/',
    documentationUrl: 'https://external-secrets.io/latest/',
    githubUrl: 'https://github.com/external-secrets/external-secrets',
    tags: ['kubernetes', 'secrets', 'security']
  },

  // Version Control
  {
    name: 'Git',
    description: 'Distributed version control system for tracking changes in source code.',
    category: 'Version Control',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://git-scm.com/',
    githubUrl: 'https://github.com/git/git',
    tags: ['vcs', 'source-control', 'collaboration']
  },
  {
    name: 'GitHub',
    description: 'Web-based hosting service for version control using Git.',
    category: 'Version Control',
    importance: 'Essential',
    isOpenSource: false,
    url: 'https://github.com',
    tags: ['git', 'collaboration', 'hosting']
  },
  {
    name: 'GitLab',
    description: 'Complete DevOps platform that enables professionals to perform all the tasks in a project.',
    category: 'Version Control',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://gitlab.com',
    documentationUrl: 'https://docs.gitlab.com',
    githubUrl: 'https://github.com/gitlabhq/gitlabhq',
    tags: ['git', 'CI/CD', 'collaboration']
  },

  // Cloud Platforms
  {
    name: 'AWS',
    description: 'Comprehensive cloud computing platform by Amazon.',
    category: 'Cloud Platforms',
    importance: 'Essential',
    isOpenSource: false,
    url: 'https://aws.amazon.com/',
    documentationUrl: 'https://docs.aws.amazon.com/',
    tags: ['cloud', 'IaaS', 'PaaS']
  },
  {
    name: 'Google Cloud Platform',
    description: 'Suite of cloud computing services by Google.',
    category: 'Cloud Platforms',
    importance: 'Essential',
    isOpenSource: false,
    url: 'https://cloud.google.com/',
    documentationUrl: 'https://cloud.google.com/docs',
    tags: ['cloud', 'IaaS', 'PaaS']
  },
  {
    name: 'Microsoft Azure',
    description: 'Cloud computing service by Microsoft for building, testing, deploying, and managing applications.',
    category: 'Cloud Platforms',
    importance: 'Essential',
    isOpenSource: false,
    url: 'https://azure.microsoft.com/',
    documentationUrl: 'https://docs.microsoft.com/azure/',
    tags: ['cloud', 'IaaS', 'PaaS']
  },

  // Configuration Management
  {
    name: 'Chef',
    description: 'Configuration management tool for dealing with machine setup on physical servers, VMs, and clouds.',
    category: 'Configuration Management',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://www.chef.io/',
    githubUrl: 'https://github.com/chef/chef',
    tags: ['automation', 'configuration', 'infrastructure']
  },
  {
    name: 'Puppet',
    description: 'Tool for configuration management and automation.',
    category: 'Configuration Management',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://puppet.com/',
    githubUrl: 'https://github.com/puppetlabs/puppet',
    tags: ['automation', 'configuration', 'infrastructure']
  },
  {
    name: 'Salt',
    description: 'Python-based configuration management and remote execution engine.',
    category: 'Configuration Management',
    importance: 'Optional',
    isOpenSource: true,
    url: 'https://www.saltstack.com/',
    githubUrl: 'https://github.com/saltstack/salt',
    tags: ['automation', 'configuration', 'python']
  },

  // Service Mesh
  {
    name: 'Istio',
    description: 'Open platform to connect, manage, and secure microservices.',
    category: 'Service Mesh',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://istio.io/',
    githubUrl: 'https://github.com/istio/istio',
    tags: ['microservices', 'kubernetes', 'networking']
  },
  {
    name: 'Linkerd',
    description: 'Ultralight, security-first service mesh for Kubernetes.',
    category: 'Service Mesh',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://linkerd.io/',
    githubUrl: 'https://github.com/linkerd/linkerd2',
    tags: ['microservices', 'kubernetes', 'CNCF']
  },
  {
    name: 'Consul',
    description: 'Service mesh solution providing service discovery, configuration, and segmentation.',
    category: 'Service Mesh',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://www.consul.io/',
    githubUrl: 'https://github.com/hashicorp/consul',
    tags: ['service-discovery', 'hashicorp', 'networking']
  },
  {
    name: 'Kuma',
    description: 'Modern control plane for service mesh and microservices.',
    category: 'Service Mesh',
    importance: 'Optional',
    isOpenSource: true,
    url: 'https://kuma.io/',
    documentationUrl: 'https://kuma.io/docs/',
    githubUrl: 'https://github.com/kumahq/kuma',
    tags: ['service-mesh', 'microservices', 'CNCF']
  },
  {
    name: 'Open Service Mesh',
    description: 'Lightweight and extensible cloud native service mesh.',
    category: 'Service Mesh',
    importance: 'Optional',
    isOpenSource: true,
    url: 'https://openservicemesh.io/',
    documentationUrl: 'https://docs.openservicemesh.io/',
    githubUrl: 'https://github.com/openservicemesh/osm',
    tags: ['service-mesh', 'kubernetes', 'CNCF']
  },

  // Database & Storage
  {
    name: 'PostgreSQL',
    description: 'Advanced open-source relational database.',
    category: 'Database & Storage',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://www.postgresql.org/',
    githubUrl: 'https://github.com/postgres/postgres',
    tags: ['database', 'SQL', 'relational']
  },
  {
    name: 'MongoDB',
    description: 'Document-oriented NoSQL database.',
    category: 'Database & Storage',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://www.mongodb.com/',
    githubUrl: 'https://github.com/mongodb/mongo',
    tags: ['database', 'NoSQL', 'document-store']
  },
  {
    name: 'Redis',
    description: 'In-memory data structure store, used as a database, cache, message broker, and queue.',
    category: 'Database & Storage',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://redis.io/',
    githubUrl: 'https://github.com/redis/redis',
    tags: ['database', 'cache', 'in-memory']
  },

  // Testing
  {
    name: 'JUnit',
    description: 'Unit testing framework for Java programming language.',
    category: 'Testing',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://junit.org/',
    githubUrl: 'https://github.com/junit-team/junit5',
    tags: ['testing', 'java', 'unit-testing']
  },
  {
    name: 'Selenium',
    description: 'Framework for testing web applications.',
    category: 'Testing',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://www.selenium.dev/',
    githubUrl: 'https://github.com/SeleniumHQ/selenium',
    tags: ['testing', 'web', 'automation']
  },
  {
    name: 'k6',
    description: 'Modern load testing tool for developers.',
    category: 'Testing',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://k6.io/',
    githubUrl: 'https://github.com/grafana/k6',
    tags: ['testing', 'performance', 'load-testing']
  },
  {
    name: 'Cypress',
    description: 'Next generation front end testing tool.',
    category: 'Testing',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://www.cypress.io/',
    documentationUrl: 'https://docs.cypress.io/',
    githubUrl: 'https://github.com/cypress-io/cypress',
    tags: ['testing', 'frontend', 'automation']
  },
  {
    name: 'Gatling',
    description: 'Load testing tool for web applications.',
    category: 'Testing',
    importance: 'Optional',
    isOpenSource: true,
    url: 'https://gatling.io/',
    documentationUrl: 'https://gatling.io/docs/',
    githubUrl: 'https://github.com/gatling/gatling',
    tags: ['testing', 'performance', 'load-testing']
  },
  {
    name: 'Chaos Mesh',
    description: 'Cloud-native Chaos Engineering platform.',
    category: 'Testing',
    importance: 'Optional',
    isOpenSource: true,
    url: 'https://chaos-mesh.org/',
    documentationUrl: 'https://chaos-mesh.org/docs/',
    githubUrl: 'https://github.com/chaos-mesh/chaos-mesh',
    tags: ['chaos-engineering', 'kubernetes', 'testing']
  },
  {
    name: 'Litmus',
    description: 'Chaos engineering platform for Kubernetes.',
    category: 'Testing',
    importance: 'Optional',
    isOpenSource: true,
    url: 'https://litmuschaos.io/',
    documentationUrl: 'https://docs.litmuschaos.io/',
    githubUrl: 'https://github.com/litmuschaos/litmus',
    tags: ['chaos-engineering', 'kubernetes', 'CNCF']
  },

  // API Gateway
  {
    name: 'Kong',
    description: 'Open-source API Gateway and Microservices Management Layer.',
    category: 'API Gateway',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://konghq.com/',
    githubUrl: 'https://github.com/Kong/kong',
    tags: ['api', 'microservices', 'gateway']
  },
  {
    name: 'Ambassador',
    description: 'Kubernetes-native API Gateway built on Envoy.',
    category: 'API Gateway',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://www.getambassador.io/',
    githubUrl: 'https://github.com/datawire/ambassador',
    tags: ['api', 'kubernetes', 'gateway']
  },
  {
    name: 'Traefik',
    description: 'Modern HTTP reverse proxy and load balancer.',
    category: 'API Gateway',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://traefik.io/',
    githubUrl: 'https://github.com/traefik/traefik',
    tags: ['proxy', 'load-balancer', 'kubernetes']
  },

  // API Management
  {
    name: 'Kong Gateway',
    description: 'Cloud-native API gateway.',
    category: 'API Management',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://konghq.com/',
    documentationUrl: 'https://docs.konghq.com/',
    githubUrl: 'https://github.com/Kong/kong',
    tags: ['api-gateway', 'microservices', 'kubernetes']
  },
  {
    name: 'Tyk',
    description: 'Open source API and service management platform.',
    category: 'API Management',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://tyk.io/',
    documentationUrl: 'https://tyk.io/docs/',
    githubUrl: 'https://github.com/TykTechnologies/tyk',
    tags: ['api-gateway', 'api-management', 'security']
  },

  // Logging
  {
    name: 'ELK Stack',
    description: 'Elasticsearch, Logstash, and Kibana for log management and analytics.',
    category: 'Logging',
    importance: 'Essential',
    isOpenSource: true,
    url: 'https://www.elastic.co/elk-stack',
    githubUrl: 'https://github.com/elastic',
    tags: ['logging', 'analytics', 'monitoring']
  },
  {
    name: 'Fluentd',
    description: 'Open source data collector for unified logging layer.',
    category: 'Logging',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://www.fluentd.org/',
    githubUrl: 'https://github.com/fluent/fluentd',
    tags: ['logging', 'CNCF', 'data-collector']
  },
  {
    name: 'Loki',
    description: 'Horizontally-scalable, highly-available log aggregation system.',
    category: 'Logging',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://grafana.com/oss/loki/',
    githubUrl: 'https://github.com/grafana/loki',
    tags: ['logging', 'monitoring', 'grafana']
  },

  // Cost Management
  {
    name: 'Kubecost',
    description: 'Cost monitoring and optimization for Kubernetes workloads.',
    category: 'Cost Management',
    importance: 'Recommended',
    isOpenSource: true,
    url: 'https://www.kubecost.com/',
    documentationUrl: 'https://docs.kubecost.com/',
    githubUrl: 'https://github.com/kubecost/cost-model',
    tags: ['kubernetes', 'cost', 'monitoring']
  },
  {
    name: 'CloudHealth',
    description: 'Multi-cloud cost management and optimization platform.',
    category: 'Cost Management',
    importance: 'Optional',
    isOpenSource: false,
    url: 'https://www.cloudhealthtech.com/',
    documentationUrl: 'https://help.cloudhealthtech.com/',
    tags: ['cloud', 'cost', 'optimization']
  }
];
