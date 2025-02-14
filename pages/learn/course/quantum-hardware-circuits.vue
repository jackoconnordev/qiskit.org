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
import { Course, Prerequisite } from "constants/learnContent";
import { TextLink } from "~/types/links";

enum QuantumHardwareCircuitsUrl {
  Introduction = "https://learn.qiskit.org/course/quantum-hardware/introduction-to-quantum-error-correction-via-the-repetition-code",
  MeasurementErrorMitigation = "https://learn.qiskit.org/course/quantum-hardware/measurement-error-mitigation",
  RandomizedBenchmarking = "https://learn.qiskit.org/course/quantum-hardware/randomized-benchmarking",
  MeasuringQuantumVolume = "https://learn.qiskit.org/course/quantum-hardware/measuring-quantum-volume",
  DensityMatrixAndMixedStates = "https://learn.qiskit.org/course/quantum-hardware/density-matrix",
}

definePageMeta({
  layout: "default-max",
  pageTitle: "Investigating Quantum Hardware Using Quantum Circuits",
  routeName: "quantum-hardware-circuits",
});

const config = useRuntimeConfig();

// SEO specific definitions
const title = "Investigating Quantum Hardware Using Quantum Circuits";
const description =
  "These pages explore how errors affect quantum circuits, and how we can mitigate them, without worrying about the physics of the device itself.";
const image = `${config.public.siteUrl}/images/learn/course/quantum-hardware-circuits/quantum-hardware-circuits.png`;
const pageUrl = `${config.public.siteUrl}/learn/course/quantum-hardware-circuits`;

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

const routeName = "quantum-hardware-circuits";

const headerDescription = [
  "Most gate-based quantum computers share similar challenges with noise and errors. These pages explore how errors affect quantum circuits, and how we can mitigate them, without worrying about the physics of the device itself.",
];
const headerImg =
  "/images/learn/course/quantum-hardware-circuits/quantum-hardware-circuits.png";

const startLearningCTA: TextLink = {
  url: QuantumHardwareCircuitsUrl.Introduction,
  label: "Start learning",
  segment: {
    cta: "introduction",
    location: "header",
  },
};

const references: string[] = [];
const externalRecommendedReadingsPreamble = "";
const links: TextLink[] = [];

const courses: Course[] = [
  {
    image: "introduction-to-quantum-error-correction.png",
    label: "Introduction to Quantum Error Correction Using Repetition Codes",
    segment: {
      cta: "introduction-to-quantum-error-correction",
      location: "course",
    },
    url: QuantumHardwareCircuitsUrl.Introduction,
  },
  {
    image: "measurement-error-mitigation.png",
    label: "Measurement Error Mitigation",
    segment: { cta: "measurement-error-mitigation", location: "course" },
    url: QuantumHardwareCircuitsUrl.MeasurementErrorMitigation,
  },
  {
    image: "randomized-benchmarking.png",
    label: "Randomized Benchmarking",
    segment: { cta: "randomized-benchmarking", location: "course" },
    url: QuantumHardwareCircuitsUrl.RandomizedBenchmarking,
  },
  {
    image: "measuring-quantum-volume.png",
    label: "Measuring Quantum Volume",
    segment: { cta: "measuring-quantum-volume", location: "course" },
    url: QuantumHardwareCircuitsUrl.MeasuringQuantumVolume,
  },
  {
    image: "density-matrix-and-mixed-states.png",
    label: "The Density Matrix and Mixed States",
    segment: { cta: "density-matrix", location: "course" },
    url: QuantumHardwareCircuitsUrl.DensityMatrixAndMixedStates,
  },
];

const prerequisites: Prerequisite[] = [
  {
    title: "Multiple Qubits and Entanglement",
    description:
      "With the basics down, this chapter explores the consequences of these new quantum effects, and sets us up with tools to understand quantum algorithms.",
    segment: {
      cta: "multiple-qubits-and-entanglement",
      location: "prerequisite-material",
    },
    url: "https://learn.qiskit.org/course/ch-gates/introduction",
  },
];

const imageUrlBase = "/images/learn/course/quantum-hardware-circuits";
</script>
