export type ThinkingSkill =
  | "Recall Fundamentals"
  | "Understand Core Ideas"
  | "Apply Principles"
  | "Analyse the Problem"
  | "Review and Justify"
  | "Design and Build";

export type ActivityIcon =
  | "frontend"
  | "backend"
  | "database"
  | "integration"
  | "cloud"
  | "design"
  | "performance"
  | "workflow"
  | "ethics"
  | "security"
  | "audit";

export interface Resource {
  label: string;
  /** null when the resource is a placeholder with no public URL */
  url: string | null;
}

export interface SubActivity {
  /** local code, e.g. "1.4" or "CS601-SUB-1.4" */
  id: string;
  title: string;
  hours: number;
  /** assessment points when the source curriculum is point-based */
  points?: number;
  tag: ThinkingSkill;
  /** what the student submits */
  evidence: string;
  /** the "Meets standard" grading threshold */
  standard: string;
  /** resource ids resolved against RESOURCES */
  resources: string[];
}

export interface Activity {
  /** formal id, e.g. "CS102-ACT-01" or "CS601-ACT-01" */
  id: string;
  part: string;
  icon: ActivityIcon;
  hours: number;
  /** assessment points when the source curriculum is point-based */
  points?: number;
  title: string;
  desc: string;
  outcome: string;
  subs: SubActivity[];
}

export interface Course {
  university: string;
  department: string;
  code: string;
  title: string;
  semester: string;
  ltp: string;
  credits: number;
  totalHours: number;
  /** total assessment points when defined by the source curriculum */
  totalPoints?: number;
  type?: "core" | "elective";
}

export interface CoursePart {
  id: string;
  label: string;
  statLabel?: string;
  color: "indigo" | "sky" | "emerald" | "violet" | "amber" | "rose" | "teal";
}

export interface CourseData {
  slug: string;
  course: Course;
  shortDesc?: string;
  status?: "active" | "upcoming" | "draft";
  parts?: CoursePart[];
  activities: Activity[];
  resources: Record<string, Resource>;
}

export interface ProgramInfo {
  code: string;
  name: string;
  degree: string;
  academicYear: string;
  university: string;
  department: string;
  tagline: string;
  description: string;
}
