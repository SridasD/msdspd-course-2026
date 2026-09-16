"use client";

import {
  AlertTriangle,
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  FileText,
  FileJson,
  GitBranch,
  Images,
  Lightbulb,
  Link2,
  ListChecks,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  Video,
  Presentation,
} from "lucide-react";
import { useState } from "react";
import { RESOURCES as DEFAULT_RESOURCES, TAG_STYLES } from "@/lib/curriculum";
import { getEvaluationGuidance } from "@/lib/evaluationGuidance";
import type { Resource, SubActivity } from "@/lib/types";
import { Badge } from "./Badge";

const BRIEF_ACTIONS: Record<SubActivity["tag"], string> = {
  "Recall Fundamentals": "Build and demonstrate your understanding of",
  "Understand Core Ideas": "Explain the key ideas behind",
  "Apply Principles": "Apply the relevant principles to",
  "Analyse the Problem": "Investigate, test, and reason about",
  "Review and Justify": "Evaluate the result and justify your decisions for",
  "Design and Build": "Design and deliver a working solution for",
};

const SKILL_GUIDANCE: Record<SubActivity["tag"], string> = {
  "Recall Fundamentals": "Identify the core concepts accurately and explain how they connect in practice.",
  "Understand Core Ideas": "Explain the ideas in your own words and relate them to a realistic technical situation.",
  "Apply Principles": "Use the relevant concepts correctly in a working example, not only as a written explanation.",
  "Analyse the Problem": "Investigate the problem, compare evidence, and explain what the results reveal.",
  "Review and Justify": "Evaluate the result against clear criteria and support your decisions with evidence.",
  "Design and Build": "Turn the requirements into a working, testable solution and document the important decisions.",
};

function workBrief(sub: SubActivity) {
  const action = BRIEF_ACTIONS[sub.tag];
  const topic = sub.title.replace(/\.$/, "").toLocaleLowerCase();
  const evidence = sub.evidence.replace(/\.$/, "").toLocaleLowerCase();
  return `${action} ${topic}. Use the recommended resources to guide your approach, record the important decisions and results, and show your work through ${evidence}. Organize the submission so a reviewer can follow what you did, why you did it, and what the outcome proves.`;
}

function evidenceExample(sub: SubActivity) {
  const evidence = sub.evidence.toLocaleLowerCase();

  if (evidence.includes("diagram") || evidence.includes("map"))
    return "For example: submit a clearly labelled diagram, then annotate the important connections and include one real scenario showing how the flow works.";
  if (evidence.includes("test"))
    return "For example: include the test files, a successful test report, and at least one failure or edge-case result that demonstrates the required behaviour.";
  if (evidence.includes("screenshot") || evidence.includes("screen"))
    return "For example: provide labelled screenshots of the working result at the required states or sizes, with a short note explaining what each image proves.";
  if (evidence.includes("log") || evidence.includes("trace"))
    return "For example: highlight related entries in a real log or trace and explain how they prove the request, operation, and final outcome occurred correctly.";
  if (evidence.includes("report") || evidence.includes("checklist"))
    return "For example: submit the completed report with findings, supporting output, and a short record of the action taken for each issue.";
  if (evidence.includes("code") || evidence.includes("implementation"))
    return "For example: link the relevant implementation, identify the key files, and include a working result or test that proves the code meets the standard.";
  if (evidence.includes("demonstration") || evidence.includes("recording"))
    return "For example: show the complete workflow from start to finish, including the expected result and how the system responds when something goes wrong.";
  if (evidence.includes("contract") || evidence.includes("openapi"))
    return "For example: include the complete contract, representative requests and responses, and validation output showing the implementation follows it.";

  return `For example: submit ${sub.evidence.replace(/\.$/, "").toLocaleLowerCase()}, label the important parts, and briefly explain how each item proves the standard.`;
}

function ResourceCard({
  id,
  index,
  resources,
}: {
  id: string;
  index: number;
  resources?: Record<string, Resource>;
}) {
  const resource = (resources ?? DEFAULT_RESOURCES)[id];
  if (!resource) return null;
  const isMooc = id.startsWith("M");

  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-inset ${isMooc ? "bg-violet-50 text-violet-600 ring-violet-100" : "bg-indigo-50 text-indigo-600 ring-indigo-100"}`}>
          {isMooc ? <Presentation className="h-4 w-4" aria-hidden="true" /> : <BookOpen className="h-4 w-4" aria-hidden="true" />}
        </div>
        {resource.url ? (
          <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-600" />
        ) : (
          <ShieldCheck className="h-4 w-4 text-slate-400" />
        )}
      </div>
      <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {isMooc ? "Recommended MOOC" : resource.url ? `Learning resource ${index + 1}` : "Course-approved resource"}
      </p>
      <p className="mt-1 text-sm font-semibold leading-snug text-slate-800">{resource.label}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-indigo-700">
        {resource.url ? "Open resource" : "Ask your Course Head"}
        {resource.url && <Link2 className="h-3 w-3" />}
      </span>
    </>
  );

  const classes =
    "group block min-h-36 rounded-xl border border-slate-200 bg-white p-4 text-left transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";

  return resource.url ? (
    <a href={resource.url} target="_blank" rel="noreferrer" className={classes}>
      {body}
    </a>
  ) : (
    <div className={classes}>{body}</div>
  );
}

export function SubActivityDetail({
  sub,
  resources,
}: {
  sub: SubActivity;
  resources?: Record<string, Resource>;
}) {
  const [open, setOpen] = useState(false);
  const guidance = getEvaluationGuidance(sub);
  const tagClass = TAG_STYLES[sub.tag] ?? "bg-slate-50 text-slate-700 ring-slate-200";
  const panelId = `subactivity-${sub.id.replaceAll(".", "-")}-panel`;
  const buttonId = `subactivity-${sub.id.replaceAll(".", "-")}-button`;
  const actPrefix = sub.id.split(".")[0];
  const moocByActivity: Record<string, string> = {
    "1": "M01",
    "2": "M02",
    "3": "M03",
    "4": "M01",
    "5": "M04",
  };
  const potentialMooc = moocByActivity[actPrefix];
  const activeResources = resources ?? DEFAULT_RESOURCES;
  const hasMooc = potentialMooc && activeResources[potentialMooc];
  const resourceIds = [...sub.resources, hasMooc ? potentialMooc : null].filter(
    (id): id is string => typeof id === "string" && Boolean(activeResources[id])
  );

  return (
    <article className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md lg:col-span-2">
      <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-indigo-500 to-cyan-500" aria-hidden="true" />

      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={`flex w-full flex-col gap-3 px-5 py-4 text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500 sm:flex-row sm:items-start sm:justify-between sm:px-6 ${open ? "border-b border-slate-200" : ""}`}
      >
        <div className="flex min-w-0 items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-200">
            <Check className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="rounded bg-slate-900 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-white">
                {sub.id.startsWith("CS") ? sub.id : `SUB-${sub.id}`}
              </span>
              <Badge className={tagClass}>{sub.tag}</Badge>
            </div>
            <h4 className="mt-2 text-base font-bold leading-snug text-slate-950">{sub.title}</h4>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 pl-9 sm:pl-0">
          <Badge className="gap-1 bg-indigo-50 text-indigo-700 ring-indigo-200 tabular-nums">
            <Clock3 className="h-3 w-3" /> {sub.points != null ? `${sub.points} points` : `${sub.hours} ${sub.hours === 1 ? "hour" : "hours"}`}
          </Badge>
          <Badge className="gap-1 bg-slate-50 text-slate-600 ring-slate-200 tabular-nums">
            <BookOpen className="h-3 w-3" /> {resourceIds.length} {resourceIds.length === 1 ? "resource" : "resources"}
          </Badge>
          <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </div>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
      <div className="overflow-hidden">
      <div className="px-5 py-5 sm:px-6">
        <section className="rounded-2xl border border-indigo-200 bg-indigo-50/40 p-4 shadow-sm sm:p-5" aria-labelledby={`${sub.id}-brief`}>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm"><FileCheck2 className="h-4 w-4" aria-hidden="true" /></span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">Plan your approach</p>
              <h5 id={`${sub.id}-brief`} className="text-sm font-bold text-indigo-950">Your work brief</h5>
            </div>
          </div>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
            {workBrief(sub)}
          </p>

          <dl className="mt-4 grid overflow-hidden rounded-xl border border-indigo-100 bg-white sm:grid-cols-[1fr_1.5fr_0.8fr]">
            <div className="p-4 sm:border-r sm:border-slate-200">
              <dt className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-[10px] text-indigo-700">1</span> Understand the task</dt>
              <dd className="mt-2 text-sm font-semibold leading-5 text-slate-800">{sub.title}</dd>
              <dd className="mt-1.5 text-xs leading-5 text-slate-500">Identify the required outcome and use the learning resources to clarify unfamiliar concepts before you begin.</dd>
            </div>
            <div className="border-t border-slate-200 p-4 sm:border-r sm:border-t-0">
              <dt className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-[10px] text-indigo-700">2</span> Build &amp; document</dt>
              <dd className="mt-2 text-sm font-semibold leading-5 text-slate-800">{sub.evidence}</dd>
              <dd className="mt-1.5 text-xs leading-5 text-slate-500">Capture the process as well as the final result. Include enough context, labels, or notes for another person to understand your work.</dd>
            </div>
            <div className="border-t border-slate-200 p-4 sm:border-t-0">
              <dt className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-[10px] text-indigo-700">3</span> Demonstrate the skill</dt>
              <dd className="mt-2 text-sm font-semibold text-slate-800">{sub.tag}</dd>
              <dd className="mt-1.5 text-xs leading-5 text-slate-500">{SKILL_GUIDANCE[sub.tag]}</dd>
              <dd className="mt-1 flex items-center gap-1 text-xs text-slate-500"><Clock3 className="h-3 w-3" /> {sub.points != null ? `${sub.points} assessment points` : `${sub.hours} hours estimated`}</dd>
            </div>
          </dl>
        </section>

        <section className="mt-6 rounded-2xl border border-violet-200 bg-violet-50/40 p-4 shadow-sm sm:p-5" aria-labelledby={`${sub.id}-resources`}>
          <div className="flex items-end justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white shadow-sm"><BookOpen className="h-4 w-4" /></span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-violet-500">Learn and explore</p>
                <h5 id={`${sub.id}-resources`} className="text-sm font-bold text-violet-950">Learning resources &amp; MOOCs <span className="font-normal text-violet-400">({resourceIds.length})</span></h5>
              </div>
            </div>
            <p className="hidden text-xs text-slate-400 sm:block">Use these to prepare your evidence</p>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {resourceIds.map((id, index) => (
              <ResourceCard key={id} id={id} index={index} resources={resources} />
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/40 p-4 shadow-sm sm:p-5" aria-labelledby={`${sub.id}-evaluation`}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
                <ClipboardCheck className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Evaluation Standards &amp; Rubric</p>
                <h5 id={`${sub.id}-evaluation`} className="text-sm font-bold text-emerald-950">How your work is evaluated</h5>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-emerald-100 text-emerald-800 ring-emerald-300 font-semibold">
                Meets Standard Threshold
              </Badge>
              <Badge className="bg-slate-100 text-slate-700 ring-slate-200">
                Verifiable Assessment
              </Badge>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            {/* 1. Student-Friendly Translation (In Plain Terms) */}
            <div className="rounded-xl border border-emerald-200/80 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <Lightbulb className="h-4 w-4 text-emerald-600" />
                <span>In Plain Terms (What You Need to Prove)</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {guidance.studentExplanation}
              </p>
            </div>

            {/* 2. Formal Academic Threshold & Observable Criteria */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Official Syllabus Standard
                </span>
                <span className="text-xs font-medium text-slate-500">Grading Baseline</span>
              </div>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-900">
                &ldquo;{sub.standard}&rdquo;
              </p>

              {/* What the Evaluator Checks */}
              <div className="mt-4 border-t border-slate-100 pt-3">
                <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  What the Reviewer Verifies (Observable Criteria):
                </p>
                <ul className="mt-2.5 space-y-2">
                  {guidance.evaluatorCriteria.map((criterion, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Concrete Evidence Guide */}
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-800">
                <FileCheck2 className="h-4 w-4 text-indigo-600" />
                <span>Recommended Submission Blueprint</span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-indigo-950 font-medium">
                {guidance.concreteEvidence}
              </p>

              {/* Accepted Formats */}
              <div className="mt-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-700/80">
                  Accepted Evidence Formats:
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                    <GitBranch className="h-3 w-3 text-slate-700" /> Git repository
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                    <Terminal className="h-3 w-3 text-emerald-600" /> Tests / Output logs
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                    <Images className="h-3 w-3 text-sky-600" /> Labelled screenshots
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                    <Video className="h-3 w-3 text-rose-500" /> Screen recording / Demo
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                    <FileText className="h-3 w-3 text-indigo-600" /> Document / Runbook
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                    <Presentation className="h-3 w-3 text-amber-600" /> Presentation / PPT
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Common Pitfall Callout */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <span>Common Pitfall to Avoid</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-amber-950">
                {guidance.pitfallToAvoid}
              </p>
            </div>

            {/* 5. Pre-Submission Verification Checklist */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Pre-Submission Verification Checklist:
              </p>
              <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                {[
                  "Permissions verified: External links and repos are accessible by reviewer",
                  "Traceable artifacts: Screenshots, traces, and code files are clearly labelled",
                  "Criteria satisfied: All observable items named above are visible in evidence",
                  "Clean secrets: Passwords, personal tokens, and private keys are removed/masked",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-700">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Rubric Pillars Strip */}
            <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white sm:grid-cols-3">
              <div className="p-3.5 sm:border-r sm:border-slate-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <Target className="h-3.5 w-3.5 text-rose-500" />
                  <span>Relevance</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Directly addresses the stated task without extraneous filler.
                </p>
              </div>
              <div className="border-t border-slate-200 p-3.5 sm:border-r sm:border-t-0">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <ListChecks className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Completeness</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Every element required by the standard is present and easy to find.
                </p>
              </div>
              <div className="border-t border-slate-200 p-3.5 sm:border-t-0">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Verifiability</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Claims are supported by live code, real traces, or test executions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
      </div>
    </article>
  );
}
