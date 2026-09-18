import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Database,
  DollarSign,
  FileCheck,
  FolderGit2,
  GraduationCap,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ProgramHub } from "@/components/ProgramHub";
import { SEMESTERS, getSemesterById } from "@/lib/semesters";
import { PROGRAM_INFO } from "@/lib/courses";
import { PageHero } from "@/components/PageHero";
import { GradientHeading } from "@/components/GradientHeading";
import { BrandLogos } from "@/components/BrandLogos";

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "s1" },
    { id: "s2" },
    { id: "s3" },
    { id: "s4" },
  ];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const sem = getSemesterById(params.id);
  if (!sem) {
    return { title: "Semester Not Found | MSDSPD 2026" };
  }
  return {
    title: `Semester ${sem.roman} — ${sem.title} | MSDSPD 2026`,
    description: `${sem.summary} Official curriculum reference for MSDSPD 2026 Batch, Digital University Kerala.`,
  };
}

export default function SemesterDetailPage({ params }: PageProps) {
  const sem = getSemesterById(params.id);
  if (!sem) {
    notFound();
  }

  // If Semester 1, render the rich interactive course hub
  if (sem.number === 1) {
    return <ProgramHub />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Bar */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5 sm:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded font-semibold text-indigo-600 transition hover:text-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 text-xs sm:text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>All Semesters</span>
            </Link>
            <span className="text-slate-300">/</span>
            <span className="font-semibold text-slate-900 text-xs sm:text-sm">Semester {sem.roman}</span>
            <span className="h-4 w-px bg-slate-200 hidden md:inline" aria-hidden="true" />
            <div className="hidden md:block">
              <BrandLogos size="md" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 ring-1 ring-inset ring-amber-200">
              Upcoming Curriculum
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <PageHero
        intensity="lite"
        badge={
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-lg bg-indigo-600 px-3 py-1 text-sm font-bold tracking-tight text-white">
              Semester {sem.roman}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              {sem.credits} Credits
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
              {sem.earnings}
            </span>
          </div>
        }
        title={
          <GradientHeading className="text-3xl font-bold text-slate-900 sm:text-5xl">
            {sem.title}
          </GradientHeading>
        }
        subhead={
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            {sem.summary}
          </p>
        }
      >
        {/* Quick Semester Switcher Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">
            Navigate Semester:
          </span>
          {SEMESTERS.map((s) => {
            const isCurrent = s.number === sem.number;
            return (
              <Link
                key={s.id}
                href={`/semesters/${s.slug}`}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isCurrent
                    ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-sm ring-1 ring-indigo-500"
                    : "border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 text-slate-700 hover:border-slate-300 hover:to-slate-100/90 shadow-2xs"
                }`}
              >
                <span>Semester {s.roman}</span>
                {s.status === "active" && (
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                )}
              </Link>
            );
          })}
        </div>
      </PageHero>

      {/* Main Content */}
      <main id="main-content" className="mx-auto max-w-6xl px-5 py-12 sm:px-8 space-y-12">
        {/* Core Subjects Section */}
        <section>
          <div className="flex items-end justify-between border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Core Structure
              </span>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                Semester {sem.roman} Core Subjects
              </h2>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Official Reference
            </span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {sem.coreCourses.map((course) => (
              <div
                key={course.code}
                className="group rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/70 p-6 shadow-2xs transition-all hover:border-indigo-300/80 hover:shadow-md hover:to-indigo-50/20"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700 ring-1 ring-indigo-200">
                    {course.code}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {course.credits} Credits {course.ltp ? `· L–T–P ${course.ltp}` : ""}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {course.description}
                </p>

                <div className="mt-4 flex items-center gap-2 pt-3 border-t border-slate-100 text-xs text-amber-700">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Syllabus &amp; activity records upcoming</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Deliverable & Outcomes */}
        <section className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/40 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-xs">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Work-Immersive Project
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                {sem.project.title}
              </h3>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/70 bg-gradient-to-b from-slate-50/90 to-slate-100/40 p-5 shadow-2xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Project Scope &amp; Focus
              </h4>
              <ul className="mt-3 space-y-2.5 text-sm text-slate-700">
                {sem.project.focus.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-600 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-indigo-200/70 bg-gradient-to-b from-indigo-50/60 via-white/80 to-indigo-50/30 p-5 shadow-2xs">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Expected Semester Outcome
                </h4>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-800">
                  &ldquo;{sem.project.expectedOutcome}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-indigo-100 flex flex-wrap items-center justify-between gap-3 text-xs text-indigo-700">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/cdipd-logo.png"
                    alt="CDIPD"
                    width={191}
                    height={64}
                    className="h-5 w-auto object-contain"
                  />
                  <span className="font-semibold">Supervised in DUK Centres of Excellence</span>
                </div>
                <span className="font-bold">CDIPD / AIIRL / CGA / CDA</span>
              </div>
            </div>
          </div>
        </section>

        {/* Electives & Coordination Links */}
        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-violet-50/25 p-6 shadow-2xs transition hover:border-violet-300/70 hover:shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-600">
              <Layers className="h-4 w-4" />
              <span>Elective Allocation</span>
            </div>
            <h4 className="mt-2 text-lg font-bold text-slate-900">
              {sem.electiveInfo.description}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {sem.electiveInfo.note ??
                "Students choose electives aligned with their selected career path (AI-heavy or Full-Stack Engineering)."}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-indigo-50/25 p-6 flex flex-col justify-between shadow-2xs transition hover:border-indigo-300/70 hover:shadow-md">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
                <Compass className="h-4 w-4" />
                <span>Mentor Alignment</span>
              </div>
              <h4 className="mt-2 text-lg font-bold text-slate-900">
                Course Coordination Plan
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                View confirmed delivery leads, support mentors, and academic review authorities for Semester {sem.roman}.
              </p>
            </div>
            <div className="mt-5">
              <Link
                href="/coordination"
                className="inline-flex items-center gap-2 rounded text-sm font-bold text-indigo-600 hover:text-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <span>Open Coordination Plan</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-8 sm:flex-row sm:px-8">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <BrandLogos size="md" muted />
          </div>
          <div className="text-center sm:text-right text-xs text-slate-500">
            <span className="font-semibold text-slate-700">{PROGRAM_INFO.university}</span> — {PROGRAM_INFO.department}
          </div>
        </div>
      </footer>
    </div>
  );
}
