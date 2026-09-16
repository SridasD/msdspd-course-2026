import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ActivityList } from "@/components/ActivityList";
import { CourseHeader } from "@/components/CourseHeader";
import { getAllCourseSlugs, getCourseBySlug } from "@/lib/courses";

interface PageProps {
  params: {
    code: string;
  };
}

export function generateStaticParams() {
  return getAllCourseSlugs().map((code) => ({
    code,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const courseData = getCourseBySlug(params.code);
  if (!courseData) {
    return {
      title: "Course Not Found | MSDSPD 2026",
    };
  }

  const { course } = courseData;
  return {
    title: `${course.code} — ${course.title} | MSDSPD 2026`,
    description: `${course.code} curriculum for ${course.department}, ${course.university}. Activity-based syllabus with evidence requirements and rubrics.`,
  };
}

export default function CoursePage({ params }: PageProps) {
  const courseData = getCourseBySlug(params.code);

  if (!courseData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <CourseHeader courseData={courseData} />
      <main>
        <ActivityList courseData={courseData} />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-slate-400 sm:px-8">
          {courseData.course.totalPoints != null
            ? courseData.course.totalHours > 0
              ? "Points use the approved scale of 1 credit = 1,000 points. Hours are learning-effort estimates."
              : "Points are assessment weights. Learning hours remain subject to academic confirmation."
            : "Hours are learning-effort estimates, not attendance requirements."}
        </div>
      </footer>
    </div>
  );
}
