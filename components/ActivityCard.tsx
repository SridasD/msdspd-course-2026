"use client";

import {
  Award,
  Boxes,
  ChevronDown,
  Cloud,
  Database,
  FileCheck2,
  Layers,
  MonitorSmartphone,
  Palette,
  Scale,
  Server,
  ShieldAlert,
  Workflow,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";
import type { Activity, ActivityIcon, Resource, SubActivity } from "@/lib/types";
import { Badge } from "./Badge";
import { SubActivityDetail } from "./SubActivityDetail";

const ACT_ICONS: Record<ActivityIcon, ComponentType<{ className?: string }>> = {
  frontend: MonitorSmartphone,
  backend: Server,
  database: Database,
  integration: Boxes,
  cloud: Cloud,
  design: Palette,
  performance: Zap,
  workflow: Workflow,
  ethics: Scale,
  security: ShieldAlert,
  audit: FileCheck2,
};

const PART_THEMES: Record<string, { spine: string; iconWrap: string; chip: string }> = {
  "I": {
    spine: "bg-indigo-500",
    iconWrap: "bg-indigo-50 text-indigo-600",
    chip: "bg-indigo-50 text-indigo-700 ring-indigo-200",
  },
  "II": {
    spine: "bg-sky-500",
    iconWrap: "bg-sky-50 text-sky-600",
    chip: "bg-sky-50 text-sky-700 ring-sky-200",
  },
  "III": {
    spine: "bg-violet-500",
    iconWrap: "bg-violet-50 text-violet-600",
    chip: "bg-violet-50 text-violet-700 ring-violet-200",
  },
  "IV": {
    spine: "bg-emerald-500",
    iconWrap: "bg-emerald-50 text-emerald-600",
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  },
};

export function ActivityCard({
  activity,
  index,
  open,
  onToggle,
  visibleSubs,
  resources,
}: {
  activity: Activity;
  index: number;
  open: boolean;
  onToggle: () => void;
  visibleSubs: SubActivity[];
  resources?: Record<string, Resource>;
}) {
  const Icon = ACT_ICONS[activity.icon] ?? Layers;
  const theme = PART_THEMES[activity.part] ?? PART_THEMES["I"];
  const spine = theme.spine;
  const iconWrap = theme.iconWrap;
  const chip = theme.chip;
  const panelId = `${activity.id}-panel`;
  const btnId = `${activity.id}-button`;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <span className={`absolute inset-y-0 left-0 w-1 ${spine}`} aria-hidden="true" />

      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500 sm:px-6"
        >
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconWrap}`}>
            <Icon className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold tabular-nums text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs font-medium text-slate-500">{activity.id}</span>
            </div>
            <div className="mt-0.5 truncate text-base font-semibold text-slate-900">
              {activity.title}
            </div>
            <div className="mt-0.5 truncate text-sm text-slate-500">{activity.desc}</div>
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <Badge className={chip}>{activity.subs.length} sub-activities</Badge>
            <Badge className="bg-slate-900 text-white ring-slate-900 tabular-nums">
              {activity.points != null ? `${activity.points} pts` : `${activity.hours} hrs`}
            </Badge>
          </div>

          <ChevronDown
            className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>

      {/* CSS grid-rows accordion: 0fr -> 1fr animates height with no fixed max-height */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        aria-hidden={!open}
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden" inert={!open}>
          <div className="border-t border-slate-100 bg-slate-50 px-5 py-5 sm:px-6">
            <div className="mb-4 flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
              <Award className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
              <p>
                <span className="font-medium text-slate-800">Outcome. </span>
                {activity.outcome}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              {visibleSubs.map((sub) => (
                <SubActivityDetail key={sub.id} sub={sub} resources={resources} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
