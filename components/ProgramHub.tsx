import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Database,
  GraduationCap,
  Layers,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { COURSES, PROGRAM_INFO, SEMESTER_1_CATALOG, getCourseStats } from "@/lib/courses";
import type { CourseData } from "@/lib/types";
import { Badge } from "./Badge";
import { ExportExcelButton } from "./ExportExcelButton";
import { PageHero } from "./PageHero";
import { GradientHeading } from "./GradientHeading";
import { BrandLogos } from "./BrandLogos";

const PART_DOT_COLORS: Record<string, string> = {
  sky: "bg-sky-500",
  indigo: "bg-indigo-500",
  emerald: "bg-emerald-500",
  violet: "bg-violet-500",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
  teal: "bg-teal-500",
};

function ActiveCourseCard({ courseData }: { courseData: CourseData }) {
  const stats = getCourseStats(courseData);
  const isElective = courseData.course.type === "elective";

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/70 p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:to-indigo-50/20 hover:shadow-md active:translate-y-0 active:shadow-xs sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-lg bg-indigo-600 px-3 py-1 text-sm font-bold tracking-tight text-white">
              {courseData.course.code}
            </span>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">
              {courseData.course.semester}
            </Badge>
            <Badge
              className={
                isElective
                  ? "bg-violet-50 text-violet-700 ring-violet-200"
                  : "bg-indigo-50 text-indigo-700 ring-indigo-200"
              }
            >
              {isElective ? "Chosen Elective" : "Core Subject"}
            </Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-200">
              Active Curriculum
            </Badge>
            <span className="text-xs text-slate-500 tabular-nums">L–T–P {courseData.course.ltp}</span>
          </div>

          <h3 className="mt-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-2xl">
            <Link href={`/courses/${courseData.slug}`}>
              {courseData.course.title}
            </Link>
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {courseData.shortDesc}
          </p>

          {/* Units / Parts breakdown chips */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {courseData.parts?.map((part) => (
              <span
                key={part.id}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700"
              >
                <span
                  className={`h-2 w-2 rounded-full ${PART_DOT_COLORS[part.color] ?? "bg-indigo-500"}`}
                />
                <span className="font-semibold">{part.label}</span>
                <span className="text-slate-500">
                  ({courseData.course.totalPoints != null
                    ? `${stats.partPoints[part.id] ?? 0} pts`
                    : `${stats.partHours[part.id] ?? 0} hrs`})
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Course stats & action */}
        <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
          <div className="grid grid-cols-3 gap-3 rounded-xl border border-slate-200/70 bg-gradient-to-b from-slate-50/90 to-slate-100/40 p-3 text-center shadow-2xs">
            <div className="px-2">
              <div className="text-base font-bold text-slate-900 tabular-nums">{courseData.course.credits}</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500">Credits</div>
            </div>
            <div className="border-x border-slate-200 px-2">
              <div className="text-base font-bold text-slate-900 tabular-nums">{stats.activityCount}</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500">Activities</div>
            </div>
            <div className="px-2">
              <div className="text-base font-bold text-slate-900 tabular-nums">{stats.subActivityCount}</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500">Sub-tasks</div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:items-center lg:w-auto">
            <ExportExcelButton
              courseData={courseData}
              variant="outline"
              label="Excel (.xlsx)"
            />
            <Link
              href={`/courses/${courseData.slug}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:w-auto"
            >
              <span>Explore Course</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewCourseCard({
  code,
  title,
  credits,
  ltp,
  description,
  category,
}: {
  code: string;
  title: string;
  credits: number;
  ltp: string;
  description: string;
  category: "core" | "elective";
}) {
  const Icon = code.includes("101") ? Cpu : code.includes("501") ? Scale : Database;

  return (
    <div className="relative rounded-2xl border border-dashed border-slate-300/90 bg-gradient-to-b from-slate-50/70 via-slate-50/40 to-slate-100/50 p-6 shadow-2xs sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-lg bg-slate-700 px-2.5 py-0.5 text-xs font-bold text-white">
              {code}
            </span>
            <Badge className="bg-slate-200/80 text-slate-700 ring-slate-300">
              Semester 1
            </Badge>
            <Badge className="bg-amber-50 text-amber-800 ring-amber-200">
              {category === "core" ? "Core Subject" : "Chosen Elective"}
            </Badge>
            <Badge className="bg-slate-100 text-slate-500 ring-slate-200">
              Catalog Preview
            </Badge>
            <span className="text-xs text-slate-500 tabular-nums">L–T–P {ltp}</span>
          </div>

          <div className="mt-3 flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-200/80 text-slate-700">
              <Icon className="h-4 w-4" />
            </div>
            <h4 className="text-lg font-bold text-slate-800">{title}</h4>
          </div>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-center shadow-xs">
            <div className="text-base font-bold text-slate-900 tabular-nums">{credits}</div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Credits</div>
          </div>
          <span className="text-xs font-medium text-slate-500 italic">Syllabus upcoming</span>
        </div>
      </div>
    </div>
  );
}

export function ProgramHub() {
  const cs101 = COURSES.cs101;
  const cs102 = COURSES.cs102;
  const cs501 = COURSES.cs501;
  const cs601 = COURSES.cs601;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Institutional Top Bar */}
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
            <span className="font-semibold text-slate-900 text-xs sm:text-sm">Semester I Details</span>
            <span className="h-4 w-px bg-slate-200 hidden md:inline" aria-hidden="true" />
            <div className="hidden md:block">
              <BrandLogos size="md" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200">
              {PROGRAM_INFO.academicYear}
            </span>
          </div>
        </div>
      </div>

      {/* Program Hero */}
      <PageHero
        intensity="lite"
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>Master of Science Curriculum Portal</span>
          </div>
        }
        title={
          <GradientHeading className="text-3xl font-bold text-slate-900 sm:text-5xl">
            {PROGRAM_INFO.name}
          </GradientHeading>
        }
        subhead={
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            {PROGRAM_INFO.description}
          </p>
        }
        actions={
          <ExportExcelButton
            isMaster
            variant="secondary"
            label="Download All Courses (.xlsx)"
          />
        }
      >
        {/* Quick Program Metric Cards */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-slate-200/80 bg-gradient-to-b from-white/95 to-slate-50/80 p-4 shadow-2xs backdrop-blur transition hover:border-slate-300 hover:shadow-xs">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <BookOpen className="h-4 w-4 text-indigo-600" />
              <span>Program Batch</span>
            </div>
            <div className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">2026 Batch</div>
            <div className="mt-0.5 text-xs text-slate-500">School of Digital Sciences</div>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-gradient-to-b from-white/95 to-slate-50/80 p-4 shadow-2xs backdrop-blur transition hover:border-slate-300 hover:shadow-xs">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <Award className="h-4 w-4 text-emerald-600" />
              <span>Semester 1 Credits</span>
            </div>
            <div className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">17 Credits</div>
            <div className="mt-0.5 text-xs text-slate-500">8 Core + 9 Electives</div>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-gradient-to-b from-white/95 to-slate-50/80 p-4 shadow-2xs backdrop-blur transition hover:border-slate-300 hover:shadow-xs">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <Layers className="h-4 w-4 text-sky-600" />
              <span>Interactive Portals</span>
            </div>
            <div className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">4 Courses</div>
            <div className="mt-0.5 text-xs text-slate-500">CS101, CS102, CS501, CS601 Active</div>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-gradient-to-b from-white/95 to-slate-50/80 p-4 shadow-2xs backdrop-blur transition hover:border-slate-300 hover:shadow-xs">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <ShieldCheck className="h-4 w-4 text-violet-600" />
              <span>Curriculum Standard</span>
            </div>
            <div className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">OWASP &amp; WAI-ARIA</div>
            <div className="mt-0.5 text-xs text-slate-500">Verifiable rubrics &amp; tests</div>
          </div>
        </div>

        {/* Quick Semester Switcher Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">
            Navigate Semester:
          </span>
          <Link
            href="/semesters/1"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm ring-1 ring-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <span>Semester I</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </Link>
          <Link
            href="/semesters/2"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-2xs hover:border-slate-300 hover:to-slate-100/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <span>Semester II</span>
          </Link>
          <Link
            href="/semesters/3"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-2xs hover:border-slate-300 hover:to-slate-100/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <span>Semester III</span>
          </Link>
          <Link
            href="/semesters/4"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-2xs hover:border-slate-300 hover:to-slate-100/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <span>Semester IV</span>
          </Link>
        </div>
      </PageHero>

      {/* Main Catalog Section */}
      <main id="main-content" className="mx-auto max-w-6xl px-5 py-12 sm:px-8 space-y-12">
        {/* Core Courses Section */}
        <section>
          <div className="flex items-end justify-between border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Core Curriculum</span>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">Semester 1 Core Subjects (8 Credits)</h2>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">2 Subjects · 4 Credits each</span>
          </div>

          <div className="mt-6 space-y-5">
            {/* CS102 Active */}
            {cs102 && <ActiveCourseCard courseData={cs102} />}

            {cs101 && <ActiveCourseCard courseData={cs101} />}
          </div>
        </section>

        {/* Chosen Electives Section */}
        <section>
          <div className="flex items-end justify-between border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600">Elective Curriculum</span>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">Semester 1 Chosen Electives (9 Credits)</h2>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">3 Subjects · 3 Credits each (3 × 3 = 9 credits)</span>
          </div>

          <div className="mt-6 space-y-5">
            {/* CS501 Active */}
            {cs501 && <ActiveCourseCard courseData={cs501} />}

            {/* CS601 Active */}
            {cs601 && <ActiveCourseCard courseData={cs601} />}

            {/* CS1101 Preview */}
            <PreviewCourseCard
              code="CS1101"
              title="Big Data Analytics"
              category="elective"
              credits={3}
              ltp="2–0–1"
              description="Processing massive datasets with Apache Spark and Apache Flink, distributed stream processing, and large-scale lakehouse data architectures."
            />
          </div>
        </section>

        {/* Educational Architecture Highlights */}
        <section className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/40 p-8 sm:p-10 shadow-xs">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Educational Model</span>
            <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
              Activity-Based Curriculum Architecture
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              The MSDSPD program replaces passive lectures with operationalized, verifiable engineering deliverables.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200/70 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/40 p-5 shadow-2xs transition hover:border-indigo-200 hover:shadow-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-xs">
                <Compass className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">Transparent Standards</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Every sub-activity has an unambiguous assessment threshold, observable criteria checklist, and blueprint guidance so students know exactly how their work is evaluated.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/70 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/40 p-5 shadow-2xs transition hover:border-emerald-200 hover:shadow-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-xs">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">Verifiable Evidence</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Students demonstrate mastery through working repositories, containerized builds, OpenAPI contracts, Lighthouse traces, and live defense demonstrations.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/70 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/40 p-5 shadow-2xs transition hover:border-sky-200 hover:shadow-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-white shadow-xs">
                <Award className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">Industry Resources</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Curated industry-grade specifications, RFCs, OWASP cheat sheets, W3C accessibility patterns, and Harvard/Full Stack Open MOOCs linked directly at each task.
              </p>
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
            <div>
              <span className="font-semibold text-slate-700">{PROGRAM_INFO.university}</span> — {PROGRAM_INFO.department}
            </div>
            <div className="mt-1 text-slate-500">
              Target hours are indicative learning-effort estimates, not attendance requirements.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
