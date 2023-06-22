export interface TestResult {
  testType: "development" | "last passing version" | "stable" | "standard";
  passed: boolean;
  package: string;
  packageVersion: string;
  terraVersion: string;
  timestamp: number;
  logsLink: string | null;
  packageCommitHash: string | null;
}

export type StylesResults = {
  styleType: string;
  passed: boolean;
};

export type CoveragesResults = {
  coverageType: string;
  passed: boolean;
};

export type ProjectLanguage = {
  name: string;
  versions: string[];
};

export type ProjectConfig = {
  language: ProjectLanguage;
  dependenciesFiles: string[];
  extraDependencies: string[];
  testsCommand: string[];
  stylesCheckCommand: string[];
  coveragesCheckCommand: string[];
};

export interface Member {
  name: string;
  url: string;
  website?: string;
  description: string;
  licence: string;
  contactInfo: string | null;
  alternatives: string | null;
  affiliations?: string | null;
  labels: string[];
  createdAt: number;
  updatedAt: number;
  testsResults: TestResult[];
  stylesResults?: StylesResults[];
  coveragesResults?: CoveragesResults[];
  configuration?: ProjectConfig | null;
  historicalTestResults?: TestResult[];
  tier: "Main" | "Community" | "Extensions";
  skipTests: boolean;
  stars: number;
}

export interface Tier {
  name: string;
  description: string;
}
