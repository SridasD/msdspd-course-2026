import {
  ArrowLeft,
  Award,
  BookOpen,
  Clock,
  GraduationCap,
  Layers,
} from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";
import { CS102_DATA } from "@/lib/courses/cs102";
import { COURSES, getCourseStats } from "@/lib/courses";
import type { CourseData } from "@/lib/types";

import { ExportExcelButton } from "./ExportExcelButton";

function Stat({
  icon: Icon,
  label,
  value,
  accent = "text-indigo-600",
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: number | string;
  accent?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 ${accent}`}>
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div className="leading-tight">
        <div className="text-lg font-semibold tabular-nums text-slate-900">{value}</div>
        <div className="text-xs text-slate-500">{label}</div>
      </div>
    </div>
  );
}

export function CourseHeader({ courseData }: { courseData?: CourseData }) {
  const data = courseData ?? CS102_DATA;
  const course = data.course;
  const stats = getCourseStats(data);

  const allCourses = Object.values(COURSES);

  return (
    <header className="border-b border-slate-200 bg-white">
      {/* Top navigation banner */}
      <div className="border-b border-slate-100 bg-slate-50/80 px-5 py-2.5 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-semibold text-slate-600 transition-colors hover:text-indigo-600"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-slate-400" />
            <span>MSDSPD 2026 Curriculum</span>
          </Link>

          <div className="flex items-center gap-3">
            {allCourses.length > 1 && (
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Switch course:</span>
                <div className="flex items-center gap-1">
                  {allCourses.map((c) => {
                    const isActive = c.slug === data.slug;
                    return (
                      <Link
                        key={c.slug}
                        href={`/courses/${c.slug}`}
                        className={`rounded px-2 py-0.5 font-medium transition-colors ${
                          isActive
                            ? "bg-indigo-600 text-white"
                            : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {c.course.code}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <GraduationCap className="h-4 w-4 text-indigo-600" aria-hidden="true" />
          <span className="font-medium text-slate-700">{course.department}</span>
          <span className="text-slate-300">/</span>
          <span>{course.semester}</span>
        </div>

        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-indigo-600 px-2.5 py-1 text-sm font-semibold tracking-tight text-white">
                {course.code}
              </span>
              <span className="text-sm text-slate-400 tabular-nums">L–T–P {course.ltp}</span>
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {course.title}
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {course.university}. {data.shortDesc ?? "An activity-based curriculum with clear evidence requirements, practical learning resources, and transparent review standards."}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:mt-1">
            <ExportExcelButton
              courseData={data}
              variant="outline"
              label={`Export ${course.code} (.xlsx)`}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat
            icon={Clock}
            label={course.totalPoints != null ? "Total points" : "Total hours"}
            value={course.totalPoints ?? stats.totalHours}
          />
          <Stat icon={Award} label="Credits" value={stats.credits} accent="text-violet-600" />
          <Stat icon={Layers} label="Activities" value={stats.activityCount} accent="text-emerald-600" />
          <Stat icon={BookOpen} label="Sub-activities" value={stats.subActivityCount} accent="text-sky-600" />
        </div>
      </div>
    </header>
  );
}
