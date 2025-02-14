<template>
  <LearnCourse
    :courses="courses"
    :external-recommended-readings-preamble="
      externalRecommendedReadingsPreamble
    "
    :header-title="title"
    :header-description="headerDescription"
    :header-img="headerImg"
    :image-url-base="imageUrlBase"
    :links="links"
    :prerequisites="prerequisites"
    :references="references"
    :route-name="routeName"
    :start-learning-cta="startLearningCTA"
  />
</template>

<script setup lang="ts">
import { Course, Prerequisite } from "~/constants/learnContent";
import { LearnStartLearningUrl } from "~/constants/links";
import { RecommendedReading } from "~/types/learn";
import { TextLink } from "~/types/links";

definePageMeta({
  layout: "default-max",
  pageTitle: "Basics of quantum information",
  routeName: "basics-quantum-information-course",
});

const config = useRuntimeConfig();

// SEO specific definitions
const title = "Basics of quantum information";
const description =
  "Join John Watrous in this free, detailed mathematical exploration of quantum information, algorithms, and noise mitigation.";
const image = `${config.public.siteUrl}/images/learn/course/basics-quantum-information/atom.png`;
const pageUrl = `${config.public.siteUrl}/learn/course/basics-quantum-information`;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: image,
  ogImageAlt: title,
  ogUrl: pageUrl,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: description,
});

const routeName = "basics-quantum-information-course";

const headerDescription = [
  `Quantum computing has become a global conversation, and whether in media or
  movies, fact or fiction, the excitement for quantum is growing every day. This
  free course covers quantum information at a detailed mathematical level. Join
  John Watrous as you explore quantum information, quantum algorithms, and how
  to understand and mitigate noise.`,
];
const headerImg = "/images/learn/course/basics-quantum-information/atom.png";

const startLearningCTA: TextLink = {
  url: LearnStartLearningUrl.BasicsQuantumInformation,
  label: "Start learning",
  segment: {
    cta: "basics-quantum-information",
    location: "header",
  },
};

const references: string[] = [];

const externalRecommendedReadingsPreamble = `To make the most out of this
course, we recommend familiarity with basic linear algebra, complex numbers, and
elementary mathematical notions including sets and functions. You may also want
to install Qiskit to run your own code. The following sources are a few among
many that cover this material`;

const links: RecommendedReading[] = [
  {
    url: "https://www.khanacademy.org/math/linear-algebra",
    author: "Khan Academy,",
    label: "Linear algebra",
    description: `In this video series, Sal Khan introduces key concepts in
    linear algebra that we will rely upon.`,
    segment: {
      cta: "friedberg-insel-spence-linear-algebra",
      location: "external-recommended-readings",
    },
  },
  {
    url: "https://www.pearson.com/en-us/subject-catalog/p/linear-algebra/P200000006185/9780137515424",
    author: "Stephen Friedberg, Arnold Insel, Lawrence Spence,",
    label: "Linear Algebra",
    description: `This book on linear algebra covers the material we require,
    and also includes appendices on sets, functions, and complex numbers.`,
    segment: {
      cta: "stephen-friedberg-arnold-insel-lawrence-spence-linear-algebra",
      location: "external-recommended-readings",
    },
  },
  {
    url: "https://link.springer.com/book/10.1007/978-3-319-11080-6",
    author: "Sheldon Axler,",
    label: "Linear Algebra Done Right",
    description: `A classic text on linear algebra suitable for those at or
    beyond an advanced undergraduate level.`,
    segment: {
      cta: "sheldon-axler-linear-algebra-done-right",
      location: "external-recommended-readings",
    },
  },
  {
    url: "https://www.mathsisfun.com/sets/sets-introduction.html",
    author: "Ricky Shadrach, Rod Pierce,",
    label: "Introduction to Sets",
    description: `A beginner-level web page on sets that may help to bring some
    readers up to speed.`,
    segment: {
      cta: "ricky-shadrach-rod-pierce-introduction-to-sets",
      location: "external-recommended-readings",
    },
  },
  {
    url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch1.pdf",
    author: "John K. Hunter,",
    label: "An Introduction to Real Analysis: Chapter 1",
    description: `The first chapter of these lecture notes includes a more
    formal and detailed introduction to sets and functions.`,
    segment: {
      cta: "john-k-hunter-an-introduction-to-real-analysis-chapter",
      location: "external-recommended-readings",
    },
  },

  {
    url: "https://www.youtube.com/watch?v=1kRfHNUbkrg",
    label: "How to install Qiskit",
    description:
      "You don't need to install anything to start this course, but you may eventually want to write and run your own Qiskit programs. In this video, Nick Brønn helps you get Qiskit running.",
    segment: {
      cta: "axler-linear-algebra-done-right",
      location: "external-recommended-readings",
    },
  },
];

const courses: Course[] = [
  {
    image: "single-systems-preview.png",
    label: "Single systems",
    segment: { cta: "single-systems", location: "course" },
    url: LearnStartLearningUrl.BasicsQuantumInformation + "/single-systems",
  },
  {
    image: "multiple-systems-preview.png",
    label: "Multiple systems",
    segment: { cta: "multiple-systems", location: "course" },
    url: LearnStartLearningUrl.BasicsQuantumInformation + "/multiple-systems",
  },
  {
    image: "quantum-circuits-preview.png",
    label: "Quantum circuits",
    segment: { cta: "quantum-circuits", location: "course" },
    url: LearnStartLearningUrl.BasicsQuantumInformation + "/quantum-circuits",
  },
  {
    image: "entanglement-in-action-preview.png",
    label: "Entanglement in action",
    segment: { cta: "entanglement-in-action", location: "course" },
    url:
      LearnStartLearningUrl.BasicsQuantumInformation +
      "/entanglement-in-action",
  },
];

const prerequisites: Prerequisite[] = [];

const imageUrlBase = "/images/learn/course/basics-quantum-information";
</script>
