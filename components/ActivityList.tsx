"use client";

import {
  Search,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  ACTIVITIES as DEFAULT_ACTIVITIES,
  ALL_TAGS,
  RESOURCES as DEFAULT_RESOURCES,
  TAG_STYLES,
} from "@/lib/curriculum";
import type { CourseData, SubActivity, ThinkingSkill } from "@/lib/types";
import { ActivityCard } from "./ActivityCard";
import { Badge } from "./Badge";
import { ExportExcelButton } from "./ExportExcelButton";

function subMatches(sub: SubActivity, q: string, tags: ThinkingSkill[]): boolean {
  const tagOk = tags.length === 0 || tags.includes(sub.tag);
  if (!tagOk) return false;
  if (!q) return true;
  const hay = `${sub.id} ${sub.title} ${sub.tag} ${sub.evidence} ${sub.standard}`.toLowerCase();
  return hay.includes(q);
}

function PartHeader({
  color,
  label,
  hours,
  points,
}: {
  color: "indigo" | "sky" | "emerald" | "violet" | string;
  label: string;
  hours: number;
  points?: number;
}) {
  const dot =
    color === "sky"
      ? "bg-sky-500"
      : color === "emerald"
      ? "bg-emerald-500"
      : color === "violet"
      ? "bg-violet-500"
      : "bg-indigo-500";
  const chip =
    color === "sky"
      ? "bg-sky-50 text-sky-700 ring-sky-200"
      : color === "emerald"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
      : color === "violet"
      ? "bg-violet-50 text-violet-700 ring-violet-200"
      : "bg-indigo-50 text-indigo-700 ring-indigo-200";
  return (
    <div className="flex items-center gap-3">
      <span className={`h-2 w-2 rounded-full ${dot}`} aria-hidden="true" />
      <h2 className="text-sm font-semibold text-slate-800">{label}</h2>
      <div className="h-px flex-1 bg-slate-200" aria-hidden="true" />
      <Badge className={`${chip} tabular-nums`}>
        {points != null ? `${points} pts` : `${hours} hrs`}
      </Badge>
    </div>
  );
}

export function ActivityList({ courseData }: { courseData?: CourseData }) {
  const activities = courseData?.activities ?? DEFAULT_ACTIVITIES;
  const parts = courseData?.parts ?? [
    { id: "I", label: "Part I — Full Stack Architecture", color: "indigo" as const },
    { id: "II", label: "Part II — Cloud-Native Development", color: "sky" as const },
  ];
  const resources = courseData?.resources ?? DEFAULT_RESOURCES;

  const activityIndex = useMemo(
    () => Object.fromEntries(activities.map((a, i) => [a.id, i])),
    [activities],
  );

  const [manualOpen, setManualOpen] = useState<Set<string>>(
    () => new Set(activities[0] ? [activities[0].id] : []),
  );
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState<ThinkingSkill[]>([]);

  const q = query.trim().toLowerCase();
  const filtering = q.length > 0 || tags.length > 0;

  const computed = useMemo(() => {
    return activities.map((a) => {
      const titleHit = q.length > 0 && `${a.id} ${a.title} ${a.desc}`.toLowerCase().includes(q);
      const visibleSubs = a.subs.filter(
        (s) =>
          subMatches(s, q, tags) ||
          (titleHit && (tags.length === 0 || tags.includes(s.tag))),
      );
      return { activity: a, visibleSubs, hasMatch: visibleSubs.length > 0 };
    });
  }, [activities, q, tags]);

  const visible = filtering ? computed.filter((c) => c.hasMatch) : computed;
  const totalHits = computed.reduce((n, c) => n + c.visibleSubs.length, 0);

  const toggle = (id: string) =>
    setManualOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const expandAll = () => setManualOpen(new Set(activities.map((a) => a.id)));
  const collapseAll = () => setManualOpen(new Set());
  const isOpen = (id: string) => (filtering ? true : manualOpen.has(id));

  const toggleTag = (t: ThinkingSkill) =>
    setTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  return (
    <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
      {/* Filter bar */}
      <div className="sticky top-0 z-10 -mx-5 mb-6 border-b border-slate-200 bg-slate-50/90 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search activities, evidence, standards…"
              aria-label="Search the curriculum"
              className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-9 text-sm text-slate-800 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-slate-500 hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="tabular-nums text-slate-500">
              {filtering ? `${totalHits} matches` : `${activities.length} activities`}
            </span>
            <span className="text-slate-300">·</span>
            <button
              onClick={expandAll}
              className="rounded px-1.5 py-0.5 text-indigo-600 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Expand all
            </button>
            <button
              onClick={collapseAll}
              className="rounded px-1.5 py-0.5 text-slate-500 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Collapse
            </button>
            <span className="text-slate-300">·</span>
            <ExportExcelButton courseData={courseData} variant="toolbar" label="Excel (.xlsx)" />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {ALL_TAGS.map((t) => {
            const active = tags.includes(t);
            return (
              <button
                key={t}
                type="button"
                aria-pressed={active}
                onClick={() => toggleTag(t)}
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  active
                    ? `${TAG_STYLES[t]} ring-2`
                    : "bg-white text-slate-500 ring-slate-200 hover:bg-slate-50"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Parts */}
      {parts.map((p, idx) => {
        const partMatches = visible.filter((c) => c.activity.part === p.id);
        const partTotalHours = activities
          .filter((a) => a.part === p.id)
          .reduce((n, a) => n + a.hours, 0);
        const partTotalPoints = courseData?.course.totalPoints != null
          ? activities.filter((a) => a.part === p.id).reduce((n, a) => n + (a.points ?? 0), 0)
          : undefined;

        if (partMatches.length === 0) return null;

        return (
          <div key={p.id} className={idx > 0 ? "mt-10" : ""}>
            <PartHeader color={p.color} label={p.label} hours={partTotalHours} points={partTotalPoints} />
            <div className="mt-4 space-y-3">
              {partMatches.map((c) => (
                <ActivityCard
                  key={c.activity.id}
                  activity={c.activity}
                  index={activityIndex[c.activity.id] ?? 0}
                  open={isOpen(c.activity.id)}
                  onToggle={() => toggle(c.activity.id)}
                  visibleSubs={c.visibleSubs}
                  resources={resources}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* Render orphan activities if any don't match configured parts */}
      {(() => {
        const knownPartIds = new Set(parts.map((p) => p.id));
        const orphanMatches = visible.filter((c) => !knownPartIds.has(c.activity.part));
        if (orphanMatches.length === 0) return null;
        return (
          <div className="mt-10">
            <div className="mt-4 space-y-3">
              {orphanMatches.map((c) => (
                <ActivityCard
                  key={c.activity.id}
                  activity={c.activity}
                  index={activityIndex[c.activity.id] ?? 0}
                  open={isOpen(c.activity.id)}
                  onToggle={() => toggle(c.activity.id)}
                  visibleSubs={c.visibleSubs}
                  resources={resources}
                />
              ))}
            </div>
          </div>
        );
      })()}

      {visible.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
          <p className="text-sm font-medium text-slate-700">No sub-activities match your filters.</p>
          <p className="mt-1 text-sm text-slate-500">
            Clear the search or remove a tag to see the full curriculum.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setTags([]);
            }}
            className="mt-4 rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Reset filters
          </button>
        </div>
      )}
    </section>
  );
}
