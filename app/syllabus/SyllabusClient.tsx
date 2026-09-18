"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  ExternalLink,
  Filter,
  GraduationCap,
  Info,
  Layers,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  FileText,
} from "lucide-react";
import {
  CORE_COURSES_SYLLABUS,
  PROGRAMME_CONTEXT,
  type SyllabusCourse,
  type SyllabusUnit,
} from "@/lib/syllabus";
import { PageHero } from "@/components/PageHero";
import { GradientHeading } from "@/components/GradientHeading";
import { BrandLogos } from "@/components/BrandLogos";

export function SyllabusClient() {
  const [selectedCourse, setSelectedCourse] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showOutcomeMatrix, setShowOutcomeMatrix] = useState<boolean>(false);

  // Filter courses based on selection and search
  const filteredCourses = useMemo(() => {
    return CORE_COURSES_SYLLABUS.filter((course) => {
      const matchesTab = selectedCourse === "all" || course.code === selectedCourse;
      if (!matchesTab) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchInCourse =
        course.code.toLowerCase().includes(q) ||
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.keyTools.some((t) => t.toLowerCase().includes(q));

      const matchInUnits = course.units.some(
        (unit) =>
          unit.title.toLowerCase().includes(q) ||
          unit.activity.toLowerCase().includes(q) ||
          unit.tasks.some(
            (t) =>
              t.name.toLowerCase().includes(q) ||
              t.description.toLowerCase().includes(q)
          )
      );

      const matchInOutcomes = course.outcomes.some(
        (co) =>
          co.code.toLowerCase().includes(q) ||
          co.description.toLowerCase().includes(q)
      );

      return matchInCourse || matchInUnits || matchInOutcomes;
    });
  }, [selectedCourse, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Institutional Bar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-slate-600 transition hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <span className="h-4 w-px bg-slate-200 hidden sm:inline" aria-hidden="true" />
            <Link
              href="/coordination"
              className="hidden sm:inline-flex text-sm font-medium text-slate-500 transition hover:text-indigo-600"
            >
              Coordination Plan
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <BrandLogos size="sm" />
            </div>
            <span className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200">
              Core Syllabus (CS101–CS105)
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <PageHero
        intensity="lite"
        maxWidth="7xl"
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/90 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>Approved Regulations · Work-Integrated Learning Programme</span>
          </div>
        }
        title={
          <GradientHeading
            prefix="M.Sc. Data Science &amp; Product Development · "
            className="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Core Courses Syllabus
          </GradientHeading>
        }
        subhead={
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg max-w-4xl">
            The official academic specification for core subjects CS101 through CS105.
            Featuring standardized <strong className="font-semibold text-slate-900">1–0–3 L–T–P</strong> (Lecture–Tutorial–Practical),
            competency-mapped Course Outcomes (CO), hands-on lab sprints, and dual industry certification tracks.
          </p>
        }
        actions={
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="#assessment-model"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/90 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition hover:border-slate-300 hover:bg-slate-50"
            >
              <Award className="h-3.5 w-3.5 text-amber-600" />
              <span>Assessment Model (50/20/10/10/10)</span>
            </a>
            <a
              href="#certifications"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/90 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition hover:border-slate-300 hover:bg-slate-50"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Mandatory Certifications</span>
            </a>
            <a
              href="#board-notes"
              className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white shadow-2xs transition hover:bg-indigo-700"
            >
              <Info className="h-3.5 w-3.5" />
              <span>Board Review Notes</span>
            </a>
          </div>
        }
      />

      {/* Highlights / Fast Facts Bar */}
      <section className="border-b border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 transition hover:bg-white hover:shadow-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Total Credits
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-slate-900">80</span>
                <span className="text-xs font-medium text-slate-600">Total Program</span>
              </div>
              <div className="mt-1 text-xs text-slate-500">30 Lecture / 50 Practical</div>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 transition hover:bg-white hover:shadow-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Core Courses
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-indigo-600">5</span>
                <span className="text-xs font-medium text-slate-600">Courses (20 cr)</span>
              </div>
              <div className="mt-1 text-xs text-slate-500">CS101 – CS105 (4 cr each)</div>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 transition hover:bg-white hover:shadow-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Core L–T–P Format
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-emerald-600">1–0–3</span>
                <span className="text-xs font-medium text-slate-600">All Cores</span>
              </div>
              <div className="mt-1 text-xs text-slate-500">1 Lecture · 0 Tut · 3 Lab</div>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 transition hover:bg-white hover:shadow-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Industry Certifications
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-amber-600">2</span>
                <span className="text-xs font-medium text-slate-600">Mandatory</span>
              </div>
              <div className="mt-1 text-xs text-slate-500">From 7 approved tracks</div>
            </div>

            <div className="col-span-2 sm:col-span-1 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 transition hover:bg-white hover:shadow-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Primary Evaluation
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-sky-600">50%</span>
                <span className="text-xs font-medium text-slate-600">Live Project</span>
              </div>
              <div className="mt-1 text-xs text-slate-500">+ 20% Milestones, 10% Theory</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-8">
        {/* Navigation Filters and Search */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          {/* Course Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-200/70 border border-slate-300/60">
            <button
              onClick={() => setSelectedCourse("all")}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                selectedCourse === "all"
                  ? "bg-white text-indigo-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All 5 Core Courses
            </button>
            {CORE_COURSES_SYLLABUS.map((c) => (
              <button
                key={c.code}
                onClick={() => setSelectedCourse(c.code)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  selectedCourse === c.code
                    ? "bg-white text-indigo-700 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{c.code}</span>
                <span
                  className={`rounded px-1.5 py-0.2 text-[10px] font-bold ${
                    c.semester.number === 1
                      ? "bg-indigo-100 text-indigo-800"
                      : c.semester.number === 2
                      ? "bg-purple-100 text-purple-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  Sem {c.semester.roman}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, tools, tasks..."
              className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-4 text-xs text-slate-900 placeholder:text-slate-400 shadow-2xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Counter if search active */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing {filteredCourses.length} course(s) matching &ldquo;{searchQuery}&rdquo;
            </span>
            <button
              onClick={() => setSearchQuery("")}
              className="text-indigo-600 hover:underline"
            >
              Reset search
            </button>
          </div>
        )}

        {/* Courses List */}
        <div className="space-y-12">
          {filteredCourses.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <Search className="mx-auto h-8 w-8 text-slate-400" />
              <p className="mt-3 text-sm font-semibold text-slate-700">No matching courses or topics found</p>
              <p className="mt-1 text-xs text-slate-500">Try broadening your search term or select &ldquo;All 5 Core Courses&rdquo;</p>
              <button
                onClick={() => {
                  setSelectedCourse("all");
                  setSearchQuery("");
                }}
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            filteredCourses.map((course) => (
              <CourseSyllabusSection key={course.code} course={course} />
            ))
          )}
        </div>

        {/* Programme Outcomes & PSOs Reference Section */}
        <section className="mt-16 border-t border-slate-200 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
                <Workflow className="h-3.5 w-3.5" />
                <span>Competency Framework</span>
              </div>
              <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                Programme Outcomes (PO) &amp; Programme-Specific Outcomes (PSO)
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                The overarching capabilities governing all Course Outcome (CO) mappings in the core syllabi.
              </p>
            </div>
            <button
              onClick={() => setShowOutcomeMatrix(!showOutcomeMatrix)}
              className="inline-flex items-center gap-1.5 self-start rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50"
            >
              {showOutcomeMatrix ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  <span>Hide Details</span>
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  <span>Expand All Outcomes Reference</span>
                </>
              )}
            </button>
          </div>

          {showOutcomeMatrix && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {/* POs */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-3">
                  <GraduationCap className="h-4 w-4 text-indigo-600" />
                  <span>Programme Outcomes (PO1 – PO8)</span>
                </div>
                <div className="divide-y divide-slate-100 mt-2">
                  {PROGRAMME_CONTEXT.programOutcomes.map((po) => (
                    <div key={po.code} className="py-2.5 flex items-start gap-3">
                      <span className="shrink-0 rounded bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-700 ring-1 ring-inset ring-indigo-200">
                        {po.code}
                      </span>
                      <span className="text-xs font-medium text-slate-700 leading-relaxed">
                        {po.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PSOs */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-3">
                  <Layers3 className="h-4 w-4 text-purple-600" />
                  <span>Programme-Specific Outcomes (PSO1 – PSO4)</span>
                </div>
                <div className="divide-y divide-slate-100 mt-2">
                  {PROGRAMME_CONTEXT.programSpecificOutcomes.map((pso) => (
                    <div key={pso.code} className="py-2.5 flex items-start gap-3">
                      <span className="shrink-0 rounded bg-purple-50 px-2 py-0.5 text-xs font-bold text-purple-700 ring-1 ring-inset ring-purple-200">
                        {pso.code}
                      </span>
                      <span className="text-xs font-medium text-slate-700 leading-relaxed">
                        {pso.title}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl bg-slate-50 p-3.5 text-[11px] text-slate-600 leading-relaxed">
                  <strong className="font-semibold text-slate-800">Scaffolding Note:</strong> Unit activities and tasks are authoritative per the course plan. Course Outcomes (COs) and CO → PO/PSO mappings provide the accredited scaffolding ensuring complete institutional alignment.
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Programme Assessment Model Section */}
        <section id="assessment-model" className="mt-14 border-t border-slate-200 pt-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Award className="h-3.5 w-3.5 text-amber-600" />
            <span>Official Assessment Model (§11)</span>
          </div>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Core Evaluation &amp; Grading Weights
          </h2>
          <p className="mt-1 text-xs text-slate-600 max-w-3xl">
            Governs all core courses in the MSDSPD programme, prioritizing hands-on execution and industry-standard deliverables over traditional rote memorization.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROGRAMME_CONTEXT.assessmentModel.map((item) => (
              <div
                key={item.component}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs transition hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Weight
                    </span>
                    <span
                      className={`text-xl font-black ${
                        item.weight >= 50
                          ? "text-indigo-600"
                          : item.weight >= 20
                          ? "text-sky-600"
                          : "text-slate-700"
                      }`}
                    >
                      {item.weight}%
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-bold text-slate-900 leading-snug">
                    {item.component}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        item.weight >= 50
                          ? "bg-indigo-600"
                          : item.weight >= 20
                          ? "bg-sky-500"
                          : "bg-slate-400"
                      }`}
                      style={{ width: `${item.weight}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mandatory Certifications Section */}
        <section id="certifications" className="mt-14 border-t border-slate-200 pt-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Industry Credentials</span>
          </div>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Mandatory Certifications Panel
          </h2>
          <p className="mt-1 text-xs text-slate-600 max-w-3xl">
            {PROGRAMME_CONTEXT.mandatoryCertifications.rule}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMME_CONTEXT.mandatoryCertifications.options.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition hover:border-slate-300 hover:shadow-xs"
              >
                <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 leading-snug">
                    {cert.name}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                      {cert.provider}
                    </span>
                    <span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
                      {cert.badgeType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Supporting Programme Elements */}
        <section className="mt-14 border-t border-slate-200 pt-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
            <Layers className="h-3.5 w-3.5 text-indigo-600" />
            <span>Experiential Learning</span>
          </div>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Project Lab &amp; Industry Placement
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-indigo-100 p-1.5 text-indigo-700">
                  <Cpu className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-bold text-slate-900">
                  {PROGRAMME_CONTEXT.supportingElements.projectLab.title}
                </h3>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                {PROGRAMME_CONTEXT.supportingElements.projectLab.evaluation}
              </p>
              <div className="mt-4 space-y-2.5">
                {PROGRAMME_CONTEXT.supportingElements.projectLab.semesters.map((s) => (
                  <div key={s.semester} className="rounded-xl bg-slate-50 p-3 text-xs border border-slate-150">
                    <span className="font-bold text-indigo-700">{s.semester}:</span>{" "}
                    <span className="text-slate-700">{s.focus}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-purple-100 p-1.5 text-purple-700">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-bold text-slate-900">
                  Final Placement &amp; Capstone ({PROGRAMME_CONTEXT.supportingElements.finalProject.semester})
                </h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                {PROGRAMME_CONTEXT.supportingElements.finalProject.description}
              </p>
              <div className="mt-4 rounded-xl bg-purple-50/70 border border-purple-100 p-4 text-xs text-purple-900">
                <strong className="font-semibold block mb-1">Evaluation Process:</strong>
                {PROGRAMME_CONTEXT.supportingElements.finalProject.evaluation}
              </div>
            </div>
          </div>
        </section>

        {/* Board Review Reconciliations Callout */}
        <section id="board-notes" className="mt-14 border-t border-slate-200 pt-12">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 shadow-2xs">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-amber-900">
                  Curriculum Harmonization &amp; Board Review Alignment
                </h3>
                <p className="mt-1 text-xs text-amber-800 leading-relaxed">
                  Key administrative clarifications documented in the official syllabus release:
                </p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {PROGRAMME_CONTEXT.boardReviewNotes.map((note) => (
                    <div
                      key={note.topic}
                      className="rounded-xl border border-amber-200/80 bg-white p-4 shadow-2xs"
                    >
                      <span className="text-xs font-bold text-amber-900 block mb-1">
                        {note.topic}
                      </span>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {note.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/**
 * Renders a full syllabus card for an individual course
 */
function CourseSyllabusSection({ course }: { course: SyllabusCourse }) {
  const semColor =
    course.semester.number === 1
      ? "indigo"
      : course.semester.number === 2
      ? "purple"
      : "amber";

  return (
    <article
      id={course.code.toLowerCase()}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs transition hover:shadow-xs"
    >
      {/* Course Header Banner */}
      <div className="border-b border-slate-200 bg-slate-50/70 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="rounded-md bg-indigo-600 px-2.5 py-0.5 text-xs font-bold text-white">
                {course.code}
              </span>
              <span
                className={`rounded-md px-2.5 py-0.5 text-xs font-semibold ${
                  semColor === "indigo"
                    ? "bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200"
                    : semColor === "purple"
                    ? "bg-purple-50 text-purple-700 ring-1 ring-inset ring-purple-200"
                    : "bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-200"
                }`}
              >
                Semester {course.semester.roman} — {course.semester.name}
              </span>
              <span className="rounded-md bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
                {course.type} · {course.credits} Credits
              </span>
              <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200">
                L–T–P: {course.ltp}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {course.title}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
              {course.description}
            </p>
          </div>

          {/* Action to interactive activities if active in portal */}
          {course.existingSlug ? (
            <Link
              href={`/courses/${course.existingSlug}`}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-indigo-50 px-3.5 py-2 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200 transition hover:bg-indigo-100"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Interactive Activities &amp; Rubrics</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
              <span>Activity portal scaffolding upcoming</span>
            </span>
          )}
        </div>

        {/* Assessment emphasis note */}
        {course.assessmentEmphasis && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-50/80 border border-amber-200/80 px-3 py-1.5 text-[11px] text-amber-800">
            <Award className="h-3.5 w-3.5 text-amber-600 shrink-0" />
            <span>
              <strong className="font-semibold">Course Evaluation Focus:</strong> {course.assessmentEmphasis}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Course Outcomes (CO) Section */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            <GraduationCap className="h-4 w-4 text-indigo-600" />
            <span>Course Outcomes (CO)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {course.outcomes.map((co) => (
              <div
                key={co.code}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-xs"
              >
                <span className="shrink-0 rounded bg-indigo-100 px-2 py-0.5 font-bold text-indigo-800">
                  {co.code}
                </span>
                <span className="text-slate-700 leading-relaxed">{co.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed 4 Units Breakdown */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Layers3 className="h-4 w-4 text-indigo-600" />
              <span>Unit-wise Activity &amp; Task Specifications</span>
            </div>
            <span className="text-xs text-slate-500">4 Units · 1–0–3 Structure</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {course.units.map((unit) => (
              <div
                key={unit.unitNumber}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-slate-100 pb-2">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                      Unit {unit.unitNumber}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 italic">
                      Activity: {unit.activity}
                    </span>
                  </div>

                  <h4 className="mt-2 text-sm font-bold text-slate-900">
                    {unit.title}
                  </h4>

                  {/* Tasks Table */}
                  <div className="mt-3 space-y-2">
                    {unit.tasks.map((task) => (
                      <div
                        key={task.name}
                        className="rounded-lg bg-slate-50 p-2.5 text-xs border border-slate-150"
                      >
                        <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{task.name}</span>
                        </div>
                        <p className="mt-1 pl-5 text-slate-600 leading-relaxed text-[11px]">
                          {task.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Tools & Technologies */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
            <Wrench className="h-3.5 w-3.5 text-slate-600" />
            <span>Key Tooling &amp; Frameworks</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {course.keyTools.map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200/80"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* CO → PO / PSO Mapping */}
        <div className="rounded-xl bg-indigo-50/50 border border-indigo-100/80 p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-800 mb-1.5">
            <Workflow className="h-3.5 w-3.5 text-indigo-600" />
            <span>CO → PO / PSO Mapping Alignment</span>
          </div>
          <p className="text-xs font-mono text-slate-700">
            {course.outcomeMapping}
          </p>
        </div>
      </div>
    </article>
  );
}
