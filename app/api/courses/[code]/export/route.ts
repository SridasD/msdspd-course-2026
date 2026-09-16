import { NextResponse } from "next/server";
import { getCourseBySlug } from "@/lib/courses";
import { buildCourseWorkbook, buildMasterCurriculumWorkbook } from "@/lib/excelExport";

export const dynamic = "force-dynamic";

interface RouteProps {
  params: {
    code: string;
  };
}

export async function GET(_request: Request, { params }: RouteProps) {
  const code = params.code.toLowerCase().trim();

  // If requesting consolidated all-courses export
  if (code === "all" || code === "master") {
    const workbook = await buildMasterCurriculumWorkbook();
    const buffer = await workbook.xlsx.writeBuffer();

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="MSDSPD_2026_Full_Curriculum_Master.xlsx"`,
      },
    });
  }

  const courseData = getCourseBySlug(code);
  if (!courseData) {
    return NextResponse.json(
      { error: `Course with code or slug '${params.code}' not found.` },
      { status: 404 }
    );
  }

  const workbook = await buildCourseWorkbook(courseData);
  const buffer = await workbook.xlsx.writeBuffer();

  const filename = `${courseData.course.code}_Curriculum_Activities_Plan.xlsx`;

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
