import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CircleDot,
  GraduationCap,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { COURSES } from "@/lib/courses";
import { PageHero } from "@/components/PageHero";
import { GradientHeading } from "@/components/GradientHeading";
import { BrandLogos } from "@/components/BrandLogos";

export const metadata: Metadata = {
  title: "Course Coordination Plan | MSDSPD 2026",
  description:
    "Level coordination, mentor alignment, academic ownership, activity references and staffing gaps for the MSDSPD programme.",
};

type Level = {
  number: number;
  title: string;
  lead: string;
  mentors: string[];
  certifications: string;
};

const semesters: { id: string; title: string; focus: string; levels: Level[] }[] = [
  {
    id: "S1",
    title: "Semester I",
    focus: "Research, UX, architecture and electives",
    levels: [
      { number: 1, title: "Orientation and Foundations", lead: "Vyga V R", mentors: ["Soorya Krishnan G", "Smitha Surendran"], certifications: "Git and GitHub" },
      { number: 2, title: "AI and Architecture Deep Dive", lead: "Requires confirmation", mentors: ["AI/ML SME — GAP"], certifications: "None specified" },
      { number: 3, title: "Electives and Market Research", lead: "Vyga V R", mentors: ["Abhi Krishnan R"], certifications: "Agile Scrum" },
      { number: 4, title: "Technology Stack, UX and Certification", lead: "Abhi Krishnan R", mentors: ["Prasanth Lal S N", "Arun Nadh G"], certifications: "AWS CLF; Google UX" },
      { number: 5, title: "Blueprint and Semester I Evaluation", lead: "Sridas D", mentors: ["Abhi Krishnan R", "Prasanth Lal S N", "Maneesh George Johnson", "Bibin Babu"], certifications: "Meta Front-End" },
    ],
  },
  {
    id: "S2",
    title: "Semester II",
    focus: "Backend, data, APIs and integration",
    levels: [
      { number: 6, title: "Backend Foundations and Data", lead: "Anoop Raj R V", mentors: ["Soorya S Kumar", "Nidheesh G"], certifications: "Docker" },
      { number: 7, title: "AI Model Training and DevOps", lead: "AI/ML SME — GAP", mentors: ["Anoop Raj R V", "Arun Nadh G"], certifications: "MongoDB; TensorFlow" },
      { number: 8, title: "Electives, APIs and Certification", lead: "Soorya S Kumar", mentors: ["Diju M", "Ajitha V S"], certifications: "GitHub Actions; Postman" },
      { number: 9, title: "Full-Stack Integration and Testing", lead: "Krishnasree K", mentors: ["Sridas D", "Prasanth Lal S N", "Ajitha V S"], certifications: "AWS SAA" },
      { number: 10, title: "Local Deployment and Semester II Evaluation", lead: "Arun Nadh G", mentors: ["Arun Kumar Balakrishnan"], certifications: "None specified" },
    ],
  },
  {
    id: "S3",
    title: "Semester III",
    focus: "Microservices, cloud, MLOps and security",
    levels: [
      { number: 11, title: "API Design and Microservices", lead: "Soorya S Kumar", mentors: ["Sridas D"], certifications: "None specified" },
      { number: 12, title: "Third-Party Integration and Certifications", lead: "Krishnasree K", mentors: ["Arun Nadh G", "Diju M"], certifications: "CKA; GCP ACE" },
      { number: 13, title: "Cloud Deployment and MLOps", lead: "Arun Nadh G", mentors: ["Anoop Raj R V"], certifications: "Databricks MLOps" },
      { number: 14, title: "Security, Governance and Live Product", lead: "Arun Nadh G", mentors: ["Nidheesh G", "Security SME — GAP"], certifications: "CEH" },
      { number: 15, title: "Product Hardening and Semester III Evaluation", lead: "Arun Nadh G", mentors: ["Arun Kumar Balakrishnan", "Ajitha V S"], certifications: "AWS DevOps Professional" },
    ],
  },
  {
    id: "S4",
    title: "Semester IV",
    focus: "Final product, placement and evaluation",
    levels: [
      { number: 16, title: "Final Project Scoping", lead: "Arun Kumar Balakrishnan", mentors: ["Vyga V R", "Smitha Surendran"], certifications: "Azure AI-102" },
      { number: 17, title: "Product Build and Certification Sprint", lead: "Soorya Krishnan G", mentors: ["Soorya S Kumar", "Krishnasree K", "Maneesh George Johnson", "Bibin Babu"], certifications: "Certified Scrum Master" },
      { number: 18, title: "Advanced Features and Expert Review", lead: "Sridas D", mentors: ["Diju M", "Bibin Babu"], certifications: "AWS Machine Learning Specialty" },
      { number: 19, title: "Report and Industry Evaluation", lead: "Arun Kumar Balakrishnan", mentors: ["Vyga V R", "Smitha Surendran"], certifications: "Google Professional Data Engineer" },
      { number: 20, title: "Final Viva and Convocation", lead: "Arun Kumar Balakrishnan", mentors: ["Sridas D", "Arun Nadh G"], certifications: "CMMI Associate" },
    ],
  },
];

const courseCoordination: Record<string, { academic: string; mentors: string[]; note?: string }> = {
  CS101: {
    academic: "Dr Manoj Kumar",
    mentors: ["AI/ML SME — GAP", "Sridas D — architecture focus", "Arun Nadh G — deployment and DevOps focus"],
  },
  CS102: {
    academic: "Dr Ajith Kumar",
    mentors: ["Sridas D", "Abhi Krishnan R", "Prasanth Lal S N", "Maneesh George Johnson", "Bibin Babu", "Arun Nadh G"],
    note: "Mentor disciplines cover architecture, frontend, mobile, full-stack and cloud delivery.",
  },
  CS501: {
    academic: "Dr Manoj Kumar, Dr Ajith Kumar",
    mentors: ["Arun Kumar Balakrishnan — governance", "Nidheesh G — data privacy", "AI/ML SME — GAP — modelling ethics"],
  },
  CS601: {
    academic: "Dr Ajith Kumar",
    mentors: ["Abhi Krishnan R", "Prasanth Lal S N", "Maneesh George Johnson", "Bibin Babu — mobile"],
  },
};

const lifecycle = [
  "Approve curriculum",
  "Assign level leads",
  "Map activities to sprints",
  "Assign student work",
  "Review evidence",
  "Academic evaluation",
  "Close sprint and level",
];

function StatusPill({ value }: { value: string }) {
  const gap = value.includes("GAP") || value.includes("Requires confirmation");
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${gap ? "bg-amber-50 text-amber-800 ring-amber-200" : "bg-emerald-50 text-emerald-700 ring-emerald-200"}`}>
      {gap ? <AlertTriangle className="h-3 w-3" /> : <CheckCircle2 className="h-3 w-3" />}
      {value}
    </span>
  );
}

export default function CoordinationPage() {
  const courses = Object.values(COURSES);
  const activityCount = courses.reduce((sum, course) => sum + course.activities.length, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 sm:px-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 rounded text-sm font-semibold text-slate-600 transition hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
              <ArrowLeft className="h-4 w-4" /> Curriculum portal
            </Link>
            <span className="h-5 w-px bg-slate-200 hidden sm:inline" aria-hidden="true" />
            <Link href="/syllabus" className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-indigo-600 transition">
              Core Syllabus
            </Link>
            <span className="h-5 w-px bg-slate-200 hidden sm:inline" aria-hidden="true" />
            <div className="hidden sm:block">
              <BrandLogos size="md" />
            </div>
          </div>
          <div className="text-xs font-semibold text-slate-500 hidden md:block">
            Centre for Digital Innovation and Product Development
          </div>
        </div>
      </header>

      <PageHero as="section" intensity="lite" maxWidth="7xl">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-indigo-600 animate-fade-up-lite motion-reduce:animate-none">
              <CircleDot className="h-4 w-4" /> Programme operations
            </div>
            <GradientHeading className="mt-4 max-w-4xl text-3xl font-bold text-slate-900 sm:text-5xl animate-fade-up-lite-1 motion-reduce:animate-none">
              Course Coordination Plan
            </GradientHeading>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg animate-fade-up-lite-2 motion-reduce:animate-none">
              Confirmed level ownership, specialist support, academic authority and approved curriculum activity references for the MSDSPD work-integrated programme.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 animate-fade-up-lite-3 motion-reduce:animate-none">
            {[
              ["20", "Levels"],
              ["16", "CDIPD members"],
              [String(courses.length), "Mapped courses"],
              [String(activityCount), "Activity records"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                <div className="text-2xl font-bold text-slate-900">{value}</div>
                <div className="mt-1 text-sm text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <main id="main-content" className="mx-auto max-w-7xl space-y-14 px-5 py-12 sm:px-8">
        <section aria-labelledby="attention-heading" className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-b from-amber-50 to-amber-100/40 p-5 shadow-2xs md:col-span-1">
            <AlertTriangle className="h-6 w-6 text-amber-700" />
            <h2 id="attention-heading" className="mt-4 text-lg font-bold text-slate-900">Decisions still required</h2>
            <p className="mt-2 text-sm leading-6 text-amber-800">Unresolved roles remain visible and are never silently assigned.</p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 p-5 shadow-2xs">
            <div className="text-sm font-bold text-amber-700">AI and Machine Learning</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">Confirm the Level 2 lead and specialist support for Levels 2 and 7, CS501 modelling ethics and CS1101 analytics modelling.</p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 p-5 shadow-2xs">
            <div className="text-sm font-bold text-amber-700">Security and academic authority</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">Assign the Level 14 security specialist, review permissions and final evaluation-panel authority. Course heads for CS101, CS102, CS501, and CS601 are confirmed.</p>
          </div>
        </section>

        <section aria-labelledby="levels-heading">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">Delivery ownership</p>
              <h2 id="levels-heading" className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Semester and level coordination</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-500">Lead coordinators manage level operations. Support mentors guide and review within their assigned discipline.</p>
          </div>

          <div className="mt-7 grid gap-6 xl:grid-cols-2">
            {semesters.map((semester) => (
              <article key={semester.id} className="overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/40 shadow-xs">
                <div className="flex items-start justify-between gap-4 border-b border-slate-200 bg-slate-50 px-5 py-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{semester.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{semester.focus}</p>
                  </div>
                  <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700 ring-1 ring-indigo-200">5 levels</span>
                </div>
                <div className="divide-y divide-slate-200">
                  {semester.levels.map((level) => (
                    <div key={level.number} className="grid gap-4 px-5 py-5 sm:grid-cols-[3rem_1fr]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-700 ring-1 ring-indigo-200">L{level.number}</div>
                      <div>
                        <h4 className="font-bold text-slate-900">{level.title}</h4>
                        <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Lead coordinator</div>
                            <div className="mt-1"><StatusPill value={level.lead} /></div>
                          </div>
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Certification alignment</div>
                            <div className="mt-1 text-slate-600">{level.certifications}</div>
                          </div>
                        </div>
                        <div className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">Support mentors</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {level.mentors.map((mentor) => <StatusPill key={mentor} value={mentor} />)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="activity-heading">
          <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/40 p-5 sm:p-8 shadow-xs">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">Curriculum references</p>
                <h2 id="activity-heading" className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Course coordination mapped to activities</h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-slate-500">These are approved activity records. Named people form the confirmed course-level mentor pool; assigning a specific activity to a level or sprint remains a separate coordination decision.</p>
            </div>

            <div className="mt-8 space-y-5">
              {courses.map((courseData) => {
                const mapping = courseCoordination[courseData.course.code];
                return (
                  <article key={courseData.slug} className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40 p-5 sm:p-6 shadow-2xs">
                    <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-lg bg-indigo-600 px-2.5 py-1 text-sm font-bold text-white">{courseData.course.code}</span>
                          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">{courseData.course.totalPoints?.toLocaleString()} points</span>
                        </div>
                        <h3 className="mt-3 text-xl font-bold text-slate-900">{courseData.course.title}</h3>
                        <div className="mt-5">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Academic owner</div>
                          <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                            <GraduationCap className="h-4 w-4 shrink-0 text-indigo-600" />
                            <span>{mapping?.academic ?? "Requires confirmation"}</span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Industry mentor alignment</div>
                          <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                            {(mapping?.mentors ?? ["Requires confirmation"]).map((mentor) => (
                              <li key={mentor} className="flex items-start gap-2"><Users className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />{mentor}</li>
                            ))}
                          </ul>
                        </div>
                        {mapping?.note && <p className="mt-4 text-xs leading-5 text-amber-700">{mapping.note}</p>}
                      </div>

                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Approved activities</div>
                          <Link href={`/courses/${courseData.slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700">
                            Open course <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                          {courseData.activities.map((activity) => (
                            <div key={activity.id} className="rounded-xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 p-4 shadow-2xs transition hover:border-indigo-200 hover:shadow-xs">
                              <div className="flex items-start justify-between gap-3">
                                <span className="text-xs font-bold text-indigo-600">{activity.id}</span>
                                <span className="text-xs text-slate-500">{activity.subs.length} tasks</span>
                              </div>
                              <div className="mt-2 text-sm font-bold leading-5 text-slate-900">{activity.title}</div>
                              <div className="mt-3 text-xs text-slate-500">{activity.points ?? activity.hours} {activity.points != null ? "points" : "hours"}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section aria-labelledby="workflow-heading">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-indigo-600" />
            <h2 id="workflow-heading" className="text-2xl font-bold text-slate-900">Coordination lifecycle</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {lifecycle.map((step, index) => (
              <div key={step} className="relative rounded-xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 p-4 shadow-2xs">
                <div className="text-xs font-bold text-indigo-600">{String(index + 1).padStart(2, "0")}</div>
                <div className="mt-2 text-sm font-semibold leading-5 text-slate-700">{step}</div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="responsibilities-heading" className="grid gap-4 md:grid-cols-3">
          <h2 id="responsibilities-heading" className="sr-only">
            Roles &amp; Responsibilities
          </h2>
          {[
            { icon: GraduationCap, title: "Academic faculty", body: "Own curriculum delivery and credit-bearing assessment. Mentors may advise but do not independently award grades." },
            { icon: Layers3, title: "Level and sprint coordination", body: "Level leads manage delivery and escalation. The sprint coordinator maintains weekly cadence across levels." },
            { icon: ShieldCheck, title: "Specialist review", body: "Technical, QA and architecture sign-offs remain within each reviewer’s documented authority." },
          ].map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/70 p-5 shadow-2xs">
              <Icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{body}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <BrandLogos size="md" muted />
            <span className="text-xs font-medium text-slate-600">MSDSP Course Coordination Plan</span>
          </div>
          <span className="inline-flex items-center gap-2 text-xs"><BookOpen className="h-4 w-4 text-indigo-600" /> Progress is not attendance.</span>
        </div>
      </footer>
    </div>
  );
}
