import type { Metadata } from "next";
import { COURSES } from "@/lib/courses";
import { CoordinationClient } from "./CoordinationClient";

export const metadata: Metadata = {
  title: "Course Coordination Plan | MSDSPD 2026",
  description:
    "Level coordination, mentor alignment, academic ownership, activity references and staffing gaps for the MSDSPD programme.",
};

export default function CoordinationPage() {
  const courses = Object.values(COURSES);
  const activityCount = courses.reduce((sum, course) => sum + course.activities.length, 0);

  return <CoordinationClient courses={courses} activityCount={activityCount} />;
}
