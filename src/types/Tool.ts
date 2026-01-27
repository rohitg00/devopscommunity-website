export interface Tool {
  name: string;
  description: string;
  category: ToolCategory;
  importance: 'Essential' | 'Recommended' | 'Optional';
  isOpenSource: boolean;
  url: string;
  documentationUrl?: string;
  githubUrl?: string;
  logo?: string;
  tags: string[];
}

export type ToolCategory =
  | 'Container Orchestration'
  | 'Continuous Integration'
  | 'Continuous Deployment'
  | 'Infrastructure as Code'
  | 'Monitoring & Observability'
  | 'Security & Compliance'
  | 'Version Control'
  | 'Cloud Platforms'
  | 'Configuration Management'
  | 'Container Runtime'
  | 'Service Mesh'
  | 'Database & Storage'
  | 'Testing'
  | 'Collaboration'
  | 'Logging'
  | 'API Gateway';
