import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Database,
  DollarSign,
  GraduationCap,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SEMESTERS } from "@/lib/semesters";
import { PROGRAM_INFO } from "@/lib/courses";
import { ExportExcelButton } from "@/components/ExportExcelButton";
import { PageHero } from "@/components/PageHero";
import { GradientHeading } from "@/components/GradientHeading";
import { BrandLogos } from "@/components/BrandLogos";

export const metadata: Metadata = {
  title: "MSc Data Science & Product Development | Digital University Kerala",
  description:
    "Official curriculum and programme portal for the Two-year Work-Immersive M.Sc. Data Science and Product Development (MSDSPD 2026 Batch), School of Digital Sciences, Digital University Kerala.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Institutional Top Bar */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5 sm:px-8">
          <BrandLogos size="lg" />
          <div className="flex items-center gap-3">
            <Link
              href="/syllabus"
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition"
            >
              Core Syllabus
            </Link>
            <Link
              href="/coordination"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition hidden sm:inline"
            >
              Coordination
            </Link>
            <span className="hidden md:inline text-xs font-medium text-slate-500">
              {PROGRAM_INFO.department}
            </span>
            <span className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200">
              {PROGRAM_INFO.academicYear}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <PageHero
        intensity="full"
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>Two-Year Work-Immersive Learning Programme</span>
          </div>
        }
        title={
          <GradientHeading
            prefix="M.Sc. in "
            className="text-3xl font-extrabold text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
          >
            Data Science &amp; Product Development
          </GradientHeading>
        }
        subhead={
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Combines advanced academic foundations in Artificial Intelligence and software
            engineering with supervised development on live digital products across specialised
            Centres of Excellence.
          </p>
        }
        actions={
          <>
            <Link
              href="/syllabus"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-indigo-200 bg-indigo-50/80 px-3.5 py-2 text-xs font-semibold text-indigo-700 shadow-2xs backdrop-blur-sm transition hover:border-indigo-300 hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <BookOpen className="h-3.5 w-3.5 text-indigo-600" />
              <span>Core Syllabus (CS101–105)</span>
            </Link>
            <Link
              href="/coordination"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200/80 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs backdrop-blur-sm transition hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Compass className="h-3.5 w-3.5 text-indigo-600" />
              <span>Coordination Plan</span>
            </Link>
            <ExportExcelButton
              isMaster
              variant="outline"
              label="Curriculum (.xlsx)"
            />
          </>
        }
      >
        {/* Key Program Metric Strip */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 animate-fade-up-4 motion-reduce:animate-none">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
                <Calendar className="h-3.5 w-3.5" />
              </span>
              <span>Program Structure</span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">4 Semesters</div>
            <div className="mt-0.5 text-xs text-slate-500">2-year postgraduate degree</div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                <Award className="h-3.5 w-3.5" />
              </span>
              <span>Total Credits</span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">80 Credits</div>
            <div className="mt-0.5 text-xs text-slate-500">50 Lab / Work + 30 Theory</div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-50 text-violet-600">
                <Briefcase className="h-3.5 w-3.5" />
              </span>
              <span>Professional Support</span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">₹10k–₹30k</div>
            <div className="mt-0.5 text-xs text-slate-500">Monthly appraisal-linked earnings</div>
          </div>
        </div>
      </PageHero>

      {/* Main Roadmap Section */}
      <main id="main-content" className="mx-auto max-w-6xl px-5 py-12 sm:px-8 space-y-16">
        {/* Four Semesters Section */}
        <section aria-labelledby="semesters-heading">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600">
                <Layers className="h-3.5 w-3.5" />
                <span>Four-Semester Progression</span>
              </div>
              <h2 id="semesters-heading" className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                Curriculum &amp; Product Engineering Roadmap
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-slate-500 sm:text-sm">
              Select a semester to review its core architecture, elective pool, live project scope, and
              curated learning deliverables.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {SEMESTERS.map((sem) => {
              const isActive = sem.status === "active";
              return (
                <article
                  key={sem.id}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 sm:p-7 ${
                    isActive
                      ? "border-2 border-indigo-500/80 bg-gradient-to-b from-indigo-50/50 via-white to-sky-50/30 shadow-md shadow-indigo-100/50 ring-1 ring-indigo-500/20 hover:border-indigo-600 hover:shadow-lg"
                      : "border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/80 shadow-xs hover:border-slate-300 hover:shadow-md hover:from-white hover:to-slate-50"
                  }`}
                >
                  <div>
                    {/* Semester Header Tag */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${
                            isActive
                              ? "bg-gradient-to-br from-indigo-600 to-indigo-700 text-white shadow-xs"
                              : "bg-gradient-to-b from-slate-100 to-slate-200/70 text-slate-700 ring-1 ring-slate-200"
                          }`}
                        >
                          {sem.roman}
                        </span>
                        <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? "text-indigo-700" : "text-slate-500"}`}>
                          Semester {sem.number}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {isActive ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-300/80 shadow-2xs">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Active Curriculum
                          </span>
                        ) : (
                          <span className="rounded-full bg-slate-100/90 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">
                            Upcoming
                          </span>
                        )}
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-bold ring-1 ring-inset ${
                            isActive
                              ? "bg-indigo-100/80 text-indigo-800 ring-indigo-300/80"
                              : "bg-slate-100 text-slate-700 ring-slate-200"
                          }`}
                        >
                          {sem.credits} Credits
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      <Link href={`/semesters/${sem.slug}`}>
                        {sem.title}
                      </Link>
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {sem.summary}
                    </p>

                    {/* Core Subjects preview chips */}
                    <div className="mt-5 space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Core Subjects &amp; Focus
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {sem.coreCourses.map((c) => (
                          <span
                            key={c.code}
                            className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-semibold ${
                              isActive
                                ? "border-indigo-200/80 bg-white/90 text-slate-800 shadow-2xs"
                                : "border-slate-200/80 bg-slate-50 text-slate-700"
                            }`}
                          >
                            <span className="font-bold text-indigo-600">{c.code}</span>
                            <span className="hidden sm:inline text-slate-500">· {c.title}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Work-Immersive Project Box */}
                    <div
                      className={`mt-5 rounded-xl border p-3.5 text-xs ${
                        isActive
                          ? "border-indigo-200/80 bg-gradient-to-b from-indigo-50/70 to-white/90 shadow-2xs"
                          : "border-slate-200/70 bg-gradient-to-b from-slate-50/90 to-slate-100/50"
                      }`}
                    >
                      <div className="font-bold text-slate-800 flex items-center gap-1.5">
                        <Rocket className="h-3.5 w-3.5 text-indigo-600" />
                        <span>{sem.project.title}</span>
                      </div>
                      <p className="mt-1 text-slate-600 leading-normal">
                        {sem.project.expectedOutcome}
                      </p>
                    </div>
                  </div>

                  {/* Footer with Earnings & Action */}
                  <div className={`mt-6 flex items-center justify-between border-t pt-4 ${isActive ? "border-indigo-100" : "border-slate-100"}`}>
                    <div className="text-xs font-semibold text-slate-600">
                      <span className="text-slate-500 font-normal">Monthly Support: </span>
                      <span className="text-emerald-700 font-bold">{sem.earnings}</span>
                    </div>

                    <Link
                      href={`/semesters/${sem.slug}`}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-sm hover:from-indigo-700 hover:to-indigo-800 hover:shadow"
                          : "border border-slate-200 bg-gradient-to-b from-white to-slate-50/90 text-slate-700 hover:border-slate-300 hover:from-slate-50 hover:to-slate-100 hover:text-indigo-600 shadow-2xs"
                      }`}
                    >
                      <span>{isActive ? "Explore Semester 1 Details" : "View Semester Overview"}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>



        {/* Programme Model & Tracks Grid */}
        <section aria-labelledby="programme-model-heading">
          <h2 id="programme-model-heading" className="sr-only">
            Programme Model &amp; Tracks
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-indigo-50/25 p-6 shadow-xs transition-all duration-200 hover:border-indigo-200 hover:shadow-md hover:to-indigo-50/35">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-xs">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">Work-Immersive Model</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                50 out of 80 credits are derived directly from lab-oriented, work-immersive engineering
                tasks, version-controlled evidence, code reviews, and product deliverables.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-emerald-50/25 p-6 shadow-xs transition-all duration-200 hover:border-emerald-200 hover:shadow-md hover:to-emerald-50/35">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-xs">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">Dual Career Pathways</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Choose 12 skills from 17 elective areas to specialise either in an <strong>AI-heavy</strong>{" "}
                track (NLP, Vision, GenAI) or a <strong>Full-Stack</strong> track (React, Mobile, Cloud APIs).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-violet-50/25 p-6 shadow-xs transition-all duration-200 hover:border-violet-200 hover:shadow-md hover:to-violet-50/35">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-white shadow-xs">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">Coordinated Oversight</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Governed across 20 distinct delivery levels with 16 confirmed industry mentors and explicit
                academic faculty ownership for grading and credit awards.
              </p>
              <div className="mt-4">
                <Link
                  href="/coordination"
                  className="inline-flex items-center gap-1.5 rounded text-xs font-bold text-indigo-600 hover:text-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <span>View Coordination Plan</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Program Footer */}
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
