import type { Metadata } from "next";
import { SyllabusClient } from "./SyllabusClient";

export const metadata: Metadata = {
  title: "Official Core Courses Syllabus (CS101 – CS105) | MSDSPD 2026",
  description:
    "Approved curriculum syllabus for core subjects CS101 through CS105: Advanced AI, Full Stack Architecture, Modern Backend Systems, API Design & Microservices, and DevOps Pipelines.",
};

export default function SyllabusPage() {
  return <SyllabusClient />;
}
