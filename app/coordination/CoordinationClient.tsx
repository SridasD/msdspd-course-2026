"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  CircleDot,
  Compass,
  GraduationCap,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  User,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import type { CourseData } from "@/lib/types";
import {
  TEAM_ROSTER,
  COORDINATION_LEVELS,
  COURSE_COORDINATION_MAP,
  type TeamMember,
  type CoordinationLevel,
} from "@/lib/coordinationData";
import { PageHero } from "@/components/PageHero";
import { GradientHeading } from "@/components/GradientHeading";
import { BrandLogos } from "@/components/BrandLogos";

interface CoordinationClientProps {
  courses: CourseData[];
  activityCount: number;
}

const lifecycle = [
  "Approve curriculum",
  "Assign level leads",
  "Map activities to sprints",
  "Assign student work",
  "Review evidence",
  "Academic evaluation",
  "Close sprint and level",
];

export function CoordinationClient({ courses, activityCount }: CoordinationClientProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  // Active searched or selected person
  const activeSearch = searchQuery.trim().toLowerCase();

  // Find exact or closest match from team roster if selected or typed
  const matchedPerson = useMemo<TeamMember | null>(() => {
    if (selectedPerson) {
      return (
        TEAM_ROSTER.find(
          (m) => m.name.toLowerCase() === selectedPerson.toLowerCase()
        ) || null
      );
    }
    if (activeSearch) {
      return (
        TEAM_ROSTER.find((m) =>
          m.name.toLowerCase().includes(activeSearch)
        ) || null
      );
    }
    return null;
  }, [selectedPerson, activeSearch]);

  // Compute levels where this person or search term appears
  const personLevels = useMemo(() => {
    if (!matchedPerson && !activeSearch) return [];

    const targetName = matchedPerson
      ? matchedPerson.name.toLowerCase()
      : activeSearch;

    return COORDINATION_LEVELS.filter((level) => {
      const isLead = level.lead.toLowerCase().includes(targetName);
      const isMentor = level.mentors.some((m) =>
        m.toLowerCase().includes(targetName)
      );
      return isLead || isMentor;
    });
  }, [matchedPerson, activeSearch]);

  // Count leads vs support roles
  const personRoleStats = useMemo(() => {
    if (!matchedPerson && !activeSearch) return { leadCount: 0, mentorCount: 0 };
    const targetName = matchedPerson
      ? matchedPerson.name.toLowerCase()
      : activeSearch;

    let leadCount = 0;
    let mentorCount = 0;

    personLevels.forEach((level) => {
      if (level.lead.toLowerCase().includes(targetName)) {
        leadCount++;
      } else {
        mentorCount++;
      }
    });

    return { leadCount, mentorCount };
  }, [matchedPerson, activeSearch, personLevels]);

  // Associated courses for this person
  const personCourses = useMemo(() => {
    if (!matchedPerson && !activeSearch) return [];
    const targetName = matchedPerson
      ? matchedPerson.name.toLowerCase()
      : activeSearch;

    return Object.values(COURSE_COORDINATION_MAP).filter((c) => {
      const isAcademic = c.academic.toLowerCase().includes(targetName);
      const isMentor = c.mentors.some((m) =>
        m.toLowerCase().includes(targetName)
      );
      return isAcademic || isMentor;
    });
  }, [matchedPerson, activeSearch]);

  const handleSelectPerson = (name: string) => {
    if (selectedPerson === name) {
      setSelectedPerson(null);
      setSearchQuery("");
    } else {
      setSelectedPerson(name);
      setSearchQuery(name);
    }
  };

  const clearSearch = () => {
    setSelectedPerson(null);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Institutional Top Bar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 sm:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded text-sm font-semibold text-slate-600 transition hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <ArrowLeft className="h-4 w-4" /> Curriculum portal
            </Link>
            <span className="h-5 w-px bg-slate-200 hidden sm:inline" aria-hidden="true" />
            <Link
              href="/syllabus"
              className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-indigo-600 transition"
            >
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

      {/* Hero Header */}
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

      <main id="main-content" className="mx-auto max-w-7xl space-y-12 px-5 py-10 sm:px-8">
        {/* ========================================================================= */}
        {/* PERSON SEARCH & SPOTLIGHT SECTION */}
        {/* ========================================================================= */}
        <section
          id="person-lookup"
          className="rounded-3xl border border-indigo-100 bg-gradient-to-b from-white via-indigo-50/20 to-white p-6 sm:p-8 shadow-sm"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
                <Users className="h-4 w-4" />
                <span>Mentor &amp; Coordinator Lookup</span>
              </div>
              <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                Find Level Assignments by Person
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Search any team member or academic faculty to see their Level Lead roles, support mentorships, and course tracks.
              </p>
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedPerson(null);
                }}
                placeholder="Search person (e.g. Sridas, Arun, Vyga)..."
                className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-10 pr-9 text-xs font-medium text-slate-900 placeholder:text-slate-400 shadow-2xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              {(searchQuery || selectedPerson) && (
                <button
                  onClick={clearSearch}
                  className="absolute right-2.5 top-2 p-1 text-slate-400 hover:text-slate-600"
                  title="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Member Selection Pills */}
          <div className="mt-5 space-y-3">
            {/* Academic & Programme Heads */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-purple-700 mr-1">
                <GraduationCap className="h-3.5 w-3.5 text-purple-600" />
                <span>Programme Heads:</span>
              </span>
              {TEAM_ROSTER.filter((m) => m.isHead).map((member) => {
                const isSelected =
                  (matchedPerson && matchedPerson.name === member.name) ||
                  searchQuery.toLowerCase() === member.name.toLowerCase();

                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => handleSelectPerson(member.name)}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition shadow-2xs ${
                      isSelected
                        ? "bg-purple-700 text-white ring-2 ring-purple-400 shadow-xs"
                        : "bg-purple-50 text-purple-900 border border-purple-200/90 hover:bg-purple-100 hover:border-purple-300 ring-1 ring-purple-200/60"
                    }`}
                  >
                    <GraduationCap
                      className={`h-3.5 w-3.5 ${isSelected ? "text-white" : "text-purple-600"}`}
                    />
                    <span>{member.name}</span>
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.2 rounded ${
                        isSelected
                          ? "bg-purple-800 text-purple-100"
                          : "bg-purple-200/70 text-purple-800"
                      }`}
                    >
                      Head
                    </span>
                  </button>
                );
              })}
            </div>

            {/* CDIPD Team Members (A–Z) */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                Mentors &amp; Coordinators (A–Z):
              </span>
              {TEAM_ROSTER.filter((m) => !m.isHead).map((member) => {
                const isSelected =
                  (matchedPerson && matchedPerson.name === member.name) ||
                  searchQuery.toLowerCase() === member.name.toLowerCase();

                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => handleSelectPerson(member.name)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                    }`}
                  >
                    {member.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SEARCH RESULTS / PERSON SPOTLIGHT CARD */}
          {/* ========================================================================= */}
          {(matchedPerson || activeSearch) && (
            <div className="mt-8 rounded-2xl border border-indigo-200/80 bg-white p-6 shadow-sm">
              {/* Header Profile */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-slate-100 pb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-700 ring-1 ring-inset ring-indigo-200">
                      {matchedPerson?.discipline ?? "Member Spotlight"}
                    </span>
                    {matchedPerson?.isAcademicFaculty && (
                      <span className="rounded-md bg-purple-50 px-2 py-0.5 text-xs font-semibold text-purple-700 ring-1 ring-inset ring-purple-200">
                        Academic Faculty
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {matchedPerson?.name ?? searchQuery}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">
                    {matchedPerson?.designation ?? "Programme Contributor"}
                  </p>
                </div>

                {/* Role Summary Stats */}
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-indigo-50/80 border border-indigo-100 px-3.5 py-2 text-center">
                    <div className="text-lg font-black text-indigo-700">
                      {personRoleStats.leadCount}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                      Lead Coordinator
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2 text-center">
                    <div className="text-lg font-black text-slate-800">
                      {personRoleStats.mentorCount}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Support Mentor
                    </div>
                  </div>

                  <div className="rounded-xl bg-emerald-50/80 border border-emerald-100 px-3.5 py-2 text-center">
                    <div className="text-lg font-black text-emerald-700">
                      {personLevels.length}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                      Total Levels
                    </div>
                  </div>
                </div>
              </div>

              {/* Focus & Track Owned Details */}
              {matchedPerson && (
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-150">
                    <span className="font-bold text-slate-700 block mb-1">
                      Curriculum &amp; Course Alignment:
                    </span>
                    <p className="text-slate-600 leading-relaxed">
                      {matchedPerson.courseFocus} · Levels focus:{" "}
                      <span className="font-semibold text-indigo-700">
                        {matchedPerson.levelFocus}
                      </span>
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-150">
                    <span className="font-bold text-slate-700 block mb-1">
                      Certifications &amp; Tracks Owned:
                    </span>
                    <p className="text-slate-600 leading-relaxed">
                      {matchedPerson.trackOwned}
                    </p>
                  </div>
                </div>
              )}

              {/* Levels Assigned to This Person */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Layers3 className="h-4 w-4 text-indigo-600" />
                    <span>Assigned Levels ({personLevels.length})</span>
                  </h4>
                  <span className="text-[11px] text-slate-500">
                    Showing levels where {matchedPerson?.name ?? searchQuery} is assigned
                  </span>
                </div>

                {personLevels.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-6 text-center text-xs text-slate-500">
                    No specific level coordination records found for this name. Check course coordination below.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {personLevels.map((level) => {
                      const targetName = matchedPerson
                        ? matchedPerson.name.toLowerCase()
                        : activeSearch;
                      const isLead = level.lead.toLowerCase().includes(targetName);

                      return (
                        <div
                          key={level.number}
                          className={`rounded-xl border p-4 transition shadow-2xs ${
                            isLead
                              ? "border-indigo-200 bg-gradient-to-b from-indigo-50/40 to-white"
                              : "border-slate-200 bg-white"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs font-black text-white">
                                L{level.number}
                              </span>
                              <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                  {level.semesterTitle}
                                </span>
                                <h5 className="text-xs font-bold text-slate-900 leading-snug">
                                  {level.title}
                                </h5>
                              </div>
                            </div>

                            {isLead ? (
                              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-[10px] font-extrabold text-indigo-800 ring-1 ring-inset ring-indigo-300">
                                ★ Lead Coordinator
                              </span>
                            ) : (
                              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                                Support Mentor
                              </span>
                            )}
                          </div>

                          <div className="mt-3 space-y-1.5 text-[11px] border-t border-slate-100 pt-2.5">
                            <div className="flex items-start justify-between">
                              <span className="text-slate-500">Lead Coordinator:</span>
                              <span
                                className={`font-semibold ${
                                  isLead ? "text-indigo-700 font-bold" : "text-slate-800"
                                }`}
                              >
                                {level.lead}
                              </span>
                            </div>

                            <div>
                              <span className="text-slate-500 block mb-1">
                                Support Mentors:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {level.mentors.map((m) => {
                                  const isCurrent = m.toLowerCase().includes(targetName);
                                  return (
                                    <span
                                      key={m}
                                      className={`rounded px-1.5 py-0.2 text-[10px] font-medium ${
                                        isCurrent
                                          ? "bg-indigo-600 text-white font-bold"
                                          : "bg-slate-100 text-slate-600"
                                      }`}
                                    >
                                      {m}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="flex items-start justify-between pt-1">
                              <span className="text-slate-500">Certifications:</span>
                              <span className="text-slate-700 font-medium">
                                {level.certifications}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Course Mapping Alignment */}
              {personCourses.length > 0 && (
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                    <GraduationCap className="h-4 w-4 text-indigo-600" />
                    <span>Course Curriculum Alignment</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {personCourses.map((c) => (
                      <div
                        key={c.code}
                        className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 text-xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="rounded bg-indigo-600 px-2 py-0.5 text-[10px] font-bold text-white">
                            {c.code}
                          </span>
                          <span className="text-slate-500 text-[11px]">
                            Academic: {c.academic}
                          </span>
                        </div>
                        <div className="mt-1.5 font-bold text-slate-900">{c.title}</div>
                        <div className="mt-2 text-slate-600 text-[11px]">
                          <strong>Mentors:</strong> {c.mentors.join(", ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* EXISTING ATTENTION BOXES */}
        {/* ========================================================================= */}
        <section aria-labelledby="attention-heading" className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-b from-amber-50 to-amber-100/40 p-5 shadow-2xs md:col-span-1">
            <AlertTriangle className="h-6 w-6 text-amber-700" />
            <h2 id="attention-heading" className="mt-4 text-lg font-bold text-slate-900">
              Decisions still required
            </h2>
            <p className="mt-2 text-sm leading-6 text-amber-800">
              Unresolved roles remain visible and are never silently assigned.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 p-5 shadow-2xs">
            <div className="text-sm font-bold text-amber-700">AI and Machine Learning</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Confirm the Level 2 lead and specialist support for Levels 2 and 7, CS501 modelling ethics and CS1101 analytics modelling.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 p-5 shadow-2xs">
            <div className="text-sm font-bold text-amber-700">Security and academic authority</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Assign the Level 14 security specialist, review permissions and final evaluation-panel authority. Course heads for CS101, CS102, CS501, and CS601 are confirmed.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FULL 20 LEVELS BY SEMESTER */}
        {/* ========================================================================= */}
        <section aria-labelledby="levels-heading">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                Delivery ownership
              </p>
              <h2 id="levels-heading" className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Semester and level coordination
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-500">
              Lead coordinators manage level operations. Support mentors guide and review within their assigned discipline. Click any person&apos;s name to view their full workload.
            </p>
          </div>

          <div className="mt-7 grid gap-6 xl:grid-cols-2">
            {[
              { id: "S1", title: "Semester I", focus: "Research, UX, architecture and electives" },
              { id: "S2", title: "Semester II", focus: "Backend, data, APIs and integration" },
              { id: "S3", title: "Semester III", focus: "Microservices, cloud, MLOps and security" },
              { id: "S4", title: "Semester IV", focus: "Final product, placement and evaluation" },
            ].map((sem) => {
              const semLevels = COORDINATION_LEVELS.filter((l) => l.semesterId === sem.id);

              return (
                <article
                  key={sem.id}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/40 shadow-xs"
                >
                  <div className="flex items-start justify-between gap-4 border-b border-slate-200 bg-slate-50 px-5 py-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{sem.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{sem.focus}</p>
                    </div>
                    <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700 ring-1 ring-indigo-200">
                      5 levels
                    </span>
                  </div>

                  <div className="divide-y divide-slate-200">
                    {semLevels.map((level) => {
                      const targetName = matchedPerson
                        ? matchedPerson.name.toLowerCase()
                        : activeSearch;
                      const isHighlighted =
                        targetName &&
                        (level.lead.toLowerCase().includes(targetName) ||
                          level.mentors.some((m) =>
                            m.toLowerCase().includes(targetName)
                          ));

                      return (
                        <div
                          key={level.number}
                          className={`grid gap-4 px-5 py-5 sm:grid-cols-[3rem_1fr] transition ${
                            isHighlighted ? "bg-indigo-50/60" : ""
                          }`}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-700 ring-1 ring-indigo-200">
                            L{level.number}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                              <span>{level.title}</span>
                              {isHighlighted && (
                                <span className="rounded bg-indigo-600 px-1.5 py-0.2 text-[9px] font-bold text-white uppercase tracking-wider">
                                  Matched
                                </span>
                              )}
                            </h4>
                            <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                              <div>
                                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                  Lead coordinator
                                </div>
                                <div className="mt-1">
                                  <ClickableStatusPill
                                    value={level.lead}
                                    onSelectPerson={handleSelectPerson}
                                    isActive={
                                      Boolean(targetName) &&
                                      level.lead.toLowerCase().includes(targetName)
                                    }
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                  Certification alignment
                                </div>
                                <div className="mt-1 text-slate-600">{level.certifications}</div>
                              </div>
                            </div>
                            <div className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                              Support mentors
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {level.mentors.map((mentor) => (
                                <ClickableStatusPill
                                  key={mentor}
                                  value={mentor}
                                  onSelectPerson={handleSelectPerson}
                                  isActive={
                                    Boolean(targetName) &&
                                    mentor.toLowerCase().includes(targetName)
                                  }
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COURSE COORDINATION MAPPED TO ACTIVITIES */}
        {/* ========================================================================= */}
        <section aria-labelledby="activity-heading">
          <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/40 p-5 sm:p-8 shadow-xs">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                  Curriculum references
                </p>
                <h2 id="activity-heading" className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Course coordination mapped to activities
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-slate-500">
                These are approved activity records. Named people form the confirmed course-level mentor pool; assigning a specific activity to a level or sprint remains a separate coordination decision.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {courses.map((courseData) => {
                const mapping = COURSE_COORDINATION_MAP[courseData.course.code];
                return (
                  <article
                    key={courseData.slug}
                    className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40 p-5 sm:p-6 shadow-2xs"
                  >
                    <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-lg bg-indigo-600 px-2.5 py-1 text-sm font-bold text-white">
                            {courseData.course.code}
                          </span>
                          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                            {courseData.course.totalPoints?.toLocaleString()} points
                          </span>
                        </div>
                        <h3 className="mt-3 text-xl font-bold text-slate-900">
                          {courseData.course.title}
                        </h3>
                        <div className="mt-5">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Academic owner
                          </div>
                          <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                            <GraduationCap className="h-4 w-4 shrink-0 text-indigo-600" />
                            <span>{mapping?.academic ?? "Requires confirmation"}</span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Industry mentor alignment
                          </div>
                          <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                            {(mapping?.mentors ?? ["Requires confirmation"]).map((mentor) => (
                              <li key={mentor} className="flex items-start gap-2">
                                <Users className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                                {mentor}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {mapping?.note && (
                          <p className="mt-4 text-xs leading-5 text-amber-700">{mapping.note}</p>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Approved activities
                          </div>
                          <Link
                            href={`/courses/${courseData.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700"
                          >
                            Open course <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                          {courseData.activities.map((activity) => (
                            <div
                              key={activity.id}
                              className="rounded-xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 p-4 shadow-2xs transition hover:border-indigo-200 hover:shadow-xs"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <span className="text-xs font-bold text-indigo-600">
                                  {activity.id}
                                </span>
                                <span className="text-xs text-slate-500">
                                  {activity.subs.length} tasks
                                </span>
                              </div>
                              <div className="mt-2 text-sm font-bold leading-5 text-slate-900">
                                {activity.title}
                              </div>
                              <div className="mt-3 text-xs text-slate-500">
                                {activity.points ?? activity.hours}{" "}
                                {activity.points != null ? "points" : "hours"}
                              </div>
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

        {/* Lifecycle */}
        <section aria-labelledby="workflow-heading">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-indigo-600" />
            <h2 id="workflow-heading" className="text-2xl font-bold text-slate-900">
              Coordination lifecycle
            </h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {lifecycle.map((step, index) => (
              <div
                key={step}
                className="relative rounded-xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 p-4 shadow-2xs"
              >
                <div className="text-xs font-bold text-indigo-600">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 text-sm font-semibold leading-5 text-slate-700">{step}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Roles & Responsibilities */}
        <section aria-labelledby="responsibilities-heading" className="grid gap-4 md:grid-cols-3">
          <h2 id="responsibilities-heading" className="sr-only">
            Roles &amp; Responsibilities
          </h2>
          {[
            {
              icon: GraduationCap,
              title: "Academic faculty",
              body: "Own curriculum delivery and credit-bearing assessment. Mentors may advise but do not independently award grades.",
            },
            {
              icon: Layers3,
              title: "Level and sprint coordination",
              body: "Level leads manage delivery and escalation. The sprint coordinator maintains weekly cadence across levels.",
            },
            {
              icon: ShieldCheck,
              title: "Specialist review",
              body: "Technical, QA and architecture sign-offs remain within each reviewer’s documented authority.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/70 p-5 shadow-2xs"
            >
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
            <span className="text-xs font-medium text-slate-600">
              MSDSP Course Coordination Plan
            </span>
          </div>
          <span className="inline-flex items-center gap-2 text-xs">
            <BookOpen className="h-4 w-4 text-indigo-600" /> Progress is not attendance.
          </span>
        </div>
      </footer>
    </div>
  );
}

function ClickableStatusPill({
  value,
  onSelectPerson,
  isActive = false,
}: {
  value: string;
  onSelectPerson: (name: string) => void;
  isActive?: boolean;
}) {
  const gap = value.includes("GAP") || value.includes("Requires confirmation");
  const cleanName = value.split(" — ")[0].trim();
  const isHead =
    cleanName.toLowerCase().includes("ajith kumar") ||
    cleanName.toLowerCase().includes("manoj kumar");

  return (
    <button
      type="button"
      onClick={() => {
        if (!gap) onSelectPerson(cleanName);
      }}
      disabled={gap}
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset transition ${
        isActive
          ? isHead
            ? "bg-purple-700 text-white ring-purple-700 shadow-xs"
            : "bg-indigo-600 text-white ring-indigo-600 shadow-xs"
          : gap
          ? "bg-amber-50 text-amber-800 ring-amber-200 cursor-default"
          : isHead
          ? "bg-purple-50 text-purple-900 ring-purple-300 hover:bg-purple-100 hover:text-purple-950 hover:ring-purple-400 cursor-pointer"
          : "bg-emerald-50 text-emerald-700 ring-emerald-200 hover:bg-indigo-50 hover:text-indigo-700 hover:ring-indigo-300 cursor-pointer"
      }`}
      title={gap ? value : `Click to filter levels for ${cleanName}`}
    >
      {gap ? (
        <AlertTriangle className="h-3 w-3" />
      ) : isHead ? (
        <GraduationCap
          className={`h-3.5 w-3.5 ${isActive ? "text-white" : "text-purple-600"}`}
        />
      ) : (
        <CheckCircle2
          className={`h-3 w-3 ${isActive ? "text-white" : "text-emerald-600"}`}
        />
      )}
      <span>{value}</span>
    </button>
  );
}
