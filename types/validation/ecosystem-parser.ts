import { z } from "zod";
import {
  TestResult,
  StylesResults,
  CoveragesResults,
  ProjectLanguage,
  ProjectConfig,
  Member,
  Tier,
} from "../ecosystem";

const TestResultZ: z.ZodType<TestResult> = z.object({
  testType: z.enum([
    "development",
    "last passing version",
    "stable",
    "standard",
  ]),
  passed: z.boolean(),
  package: z.string(),
  packageVersion: z.string(),
  terraVersion: z.string(),
  timestamp: z.number(),
  logsLink: z.string().nullable(),
  packageCommitHash: z.string().nullable(),
});

const StylesResultsZ: z.ZodType<StylesResults> = z.object({
  styleType: z.string(),
  passed: z.boolean(),
});

const CoveragesResultsZ: z.ZodType<CoveragesResults> = z.object({
  coverageType: z.string(),
  passed: z.boolean(),
});

const ProjectLanguageZ: z.ZodType<ProjectLanguage> = z.object({
  name: z.string(),
  versions: z.array(z.string()),
});

const ProjectConfigZ: z.ZodType<ProjectConfig> = z.object({
  language: ProjectLanguageZ,
  dependenciesFiles: z.array(z.string()),
  extraDependencies: z.array(z.string()),
  testsCommand: z.array(z.string()),
  stylesCheckCommand: z.array(z.string()),
  coveragesCheckCommand: z.array(z.string()),
});

const MemberZ: z.ZodType<Member> = z.object({
  name: z.string(),
  url: z.string(),
  website: z.optional(z.string()),
  description: z.string(),
  licence: z.string(),
  contactInfo: z.string().nullable(),
  alternatives: z.string().nullable(),
  affiliations: z.optional(z.string().nullable()),
  labels: z.array(z.string()),
  createdAt: z.number(),
  updatedAt: z.number(),
  testsResults: z.array(TestResultZ),
  stylesResults: z.optional(z.array(StylesResultsZ)),
  coveragesResults: z.optional(z.array(CoveragesResultsZ)),
  configuration: z.optional(ProjectConfigZ).nullable(),
  historicalTestResults: z.optional(z.array(TestResultZ)),
  tier: z.enum(["Main", "Community", "Extensions"]),
  skipTests: z.boolean(),
  stars: z.number(),
});

const TierZ: z.ZodType<Tier> = z.object({
  name: z.string(),
  description: z.string(),
});

export function parseMembers(data: any[]): Member[] {
  return data.map(parseMember);
}

function parseMember(data: any): Member {
  return MemberZ.parse(data);
}

export function parseTiers(data: any[]): Tier[] {
  return data.map(parseTier);
}

function parseTier(data: any): Tier {
  return TierZ.parse(data);
}
