import ExcelJS from "exceljs";
import { getEvaluationGuidance } from "./evaluationGuidance";
import type { CourseData, SubActivity } from "./types";
import { COURSES, getAllCourses, getCourseStats } from "./courses";

/**
 * Styling constants for executive Excel formatting
 */
const BRAND = {
  headerBg: "1E293B", // Slate-800
  headerFont: "FFFFFF",
  partHeaderBg: "EEF2F6", // Soft Slate
  subHeaderBg: "312E81", // Indigo-900
  subHeaderFont: "FFFFFF",
  zebraBg: "F8FAFC",
  borderColor: "CBD5E1",
  accentIndigo: "4338CA",
  accentSky: "0284C7",
  tagBg: "F1F5F9",
};

const BORDER_THIN: Partial<ExcelJS.Borders> = {
  top: { style: "thin", color: { argb: BRAND.borderColor } },
  left: { style: "thin", color: { argb: BRAND.borderColor } },
  bottom: { style: "thin", color: { argb: BRAND.borderColor } },
  right: { style: "thin", color: { argb: BRAND.borderColor } },
};

/**
 * Helper to style a header row
 */
function styleHeaderRow(row: ExcelJS.Row, bgColor = BRAND.headerBg, fontColor = BRAND.headerFont) {
  row.height = 28;
  row.eachCell((cell) => {
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: bgColor },
    };
    cell.font = {
      name: "Segoe UI",
      size: 10,
      bold: true,
      color: { argb: fontColor },
    };
    cell.alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };
    cell.border = BORDER_THIN;
  });
}

/**
 * Helper to format resources list into readable text
 */
function formatResources(resourceKeys: string[], resourcesMap: CourseData["resources"]): string {
  if (!resourceKeys || resourceKeys.length === 0) return "—";
  return resourceKeys
    .map((k) => {
      const res = resourcesMap[k];
      if (!res) return k;
      return res.url ? `${res.label} (${res.url})` : res.label;
    })
    .join("\n• ");
}

/**
 * Builds an ExcelJS Workbook for a single Course
 */
export async function buildCourseWorkbook(courseData: CourseData): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "MSDSPD Academic Curriculum Portal";
  workbook.lastModifiedBy = "Curriculum Review System";
  workbook.created = new Date();
  workbook.modified = new Date();

  const { course, activities, parts = [], resources = {} } = courseData;
  const stats = getCourseStats(courseData);

  // -------------------------------------------------------------
  // Sheet 1: Course Overview
  // -------------------------------------------------------------
  const overviewSheet = workbook.addWorksheet("Course Overview", {
    views: [{ showGridLines: true }],
  });

  overviewSheet.columns = [
    { key: "property", width: 28 },
    { key: "value", width: 65 },
  ];

  // Title Banner
  const titleRow = overviewSheet.addRow(["COURSE SPECIFICATION & SYLLABUS", ""]);
  overviewSheet.mergeCells("A1:B1");
  titleRow.height = 36;
  const titleCell = overviewSheet.getCell("A1");
  titleCell.font = { name: "Segoe UI", size: 16, bold: true, color: { argb: "FFFFFF" } };
  titleCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: BRAND.accentIndigo } };
  titleCell.alignment = { vertical: "middle", horizontal: "left", indent: 1 };

  overviewSheet.addRow([]); // Blank spacer

  const metadataEntries: [string, string | number][] = [
    ["Course Code", course.code],
    ["Course Title", course.title],
    ["Program", "M.Sc. Data Science & Product Development (2026 Batch)"],
    ["Department", course.department],
    ["University", course.university],
    ["Semester", course.semester],
    ["Course Category", course.type === "elective" ? "Chosen Elective" : "Core Subject"],
    ["L-T-P Structure", course.ltp],
    ["Total Academic Credits", course.credits],
    ["Total Learning Effort Hours", `${course.totalHours} Hours`],
    ["Total Modules / Activities", stats.activityCount],
    ["Total Micro-Tasks / Sub-Activities", stats.subActivityCount],
    ["Course Philosophy & Scope", courseData.shortDesc || "Hands-on, evidence-based mastery curriculum."],
  ];

  for (const [prop, val] of metadataEntries) {
    const r = overviewSheet.addRow([prop, val]);
    r.height = 22;
    const c1 = r.getCell(1);
    const c2 = r.getCell(2);

    c1.font = { name: "Segoe UI", size: 10, bold: true, color: { argb: "334155" } };
    c1.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "F1F5F9" } };
    c1.border = BORDER_THIN;
    c1.alignment = { vertical: "middle", indent: 1 };

    c2.font = { name: "Segoe UI", size: 10, color: { argb: "0F172A" } };
    c2.border = BORDER_THIN;
    c2.alignment = { vertical: "middle", wrapText: true, indent: 1 };
  }

  // Parts breakdown section
  overviewSheet.addRow([]);
  const partHeaderRow = overviewSheet.addRow(["Curriculum Structure & Part Allocation", "Hours"]);
  partHeaderRow.height = 26;
  partHeaderRow.getCell(1).font = { name: "Segoe UI", size: 11, bold: true, color: { argb: "FFFFFF" } };
  partHeaderRow.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: BRAND.headerBg } };
  partHeaderRow.getCell(1).alignment = { vertical: "middle", indent: 1 };
  partHeaderRow.getCell(2).font = { name: "Segoe UI", size: 11, bold: true, color: { argb: "FFFFFF" } };
  partHeaderRow.getCell(2).fill = { type: "pattern", pattern: "solid", fgColor: { argb: BRAND.headerBg } };
  partHeaderRow.getCell(2).alignment = { vertical: "middle", horizontal: "center" };

  for (const part of parts) {
    const hours = stats.partHours[part.id] ?? 0;
    const pr = overviewSheet.addRow([`${part.id} — ${part.label}`, `${hours} Hours`]);
    pr.height = 22;
    pr.getCell(1).font = { name: "Segoe UI", size: 10, color: { argb: "1E293B" } };
    pr.getCell(1).border = BORDER_THIN;
    pr.getCell(1).alignment = { vertical: "middle", indent: 1 };
    pr.getCell(2).font = { name: "Segoe UI", size: 10, bold: true, color: { argb: "1E293B" } };
    pr.getCell(2).border = BORDER_THIN;
    pr.getCell(2).alignment = { vertical: "middle", horizontal: "center" };
  }

  // -------------------------------------------------------------
  // Sheet 2: Activities & Sub-Activities (The Master Syllabus)
  // -------------------------------------------------------------
  const actSheet = workbook.addWorksheet("Activities & Sub-Activities", {
    views: [{ state: "frozen", ySplit: 1, showGridLines: true }],
  });

  actSheet.columns = [
    { header: "Part", key: "part", width: 14 },
    { header: "Activity ID", key: "actId", width: 16 },
    { header: "Activity Title", key: "actTitle", width: 28 },
    { header: "Act. Hrs", key: "actHours", width: 10 },
    { header: "Sub ID", key: "subId", width: 10 },
    { header: "Sub-Activity Title", key: "subTitle", width: 34 },
    { header: "Thinking Skill Tag", key: "tag", width: 22 },
    { header: "Sub Hrs", key: "subHours", width: 10 },
    { header: "Evidence Required (Submission)", key: "evidence", width: 44 },
    { header: "Evaluation Standard (Threshold)", key: "standard", width: 44 },
    { header: "Learning Resources", key: "resources", width: 36 },
  ];

  styleHeaderRow(actSheet.getRow(1));
  actSheet.autoFilter = { from: "A1", to: "K1" };

  let rowIndex = 2;
  for (const act of activities) {
    const partObj = parts.find((p) => p.id === act.part);
    const partLabel = partObj ? `${partObj.id}: ${partObj.label}` : act.part;

    for (const sub of act.subs) {
      const isEven = rowIndex % 2 === 0;
      const row = actSheet.addRow({
        part: partLabel,
        actId: act.id,
        actTitle: act.title,
        actHours: act.hours,
        subId: sub.id,
        subTitle: sub.title,
        tag: sub.tag,
        subHours: sub.hours,
        evidence: sub.evidence,
        standard: sub.standard,
        resources: formatResources(sub.resources, resources),
      });

      row.height = 42; // Allow comfortable 2-3 line wrapping
      const rowBg = isEven ? BRAND.zebraBg : "FFFFFF";

      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: rowBg },
        };
        cell.border = BORDER_THIN;
        cell.font = { name: "Segoe UI", size: 9.5, color: { argb: "1E293B" } };

        // Specific alignments
        if (colNumber === 1 || colNumber === 2 || colNumber === 5) {
          // IDs & Part
          cell.alignment = { vertical: "top", horizontal: "center" };
          cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "0F172A" } };
        } else if (colNumber === 4 || colNumber === 8) {
          // Hours
          cell.alignment = { vertical: "top", horizontal: "center" };
        } else if (colNumber === 7) {
          // Thinking Skill Tag
          cell.alignment = { vertical: "top", horizontal: "center" };
          cell.font = { name: "Segoe UI", size: 9, bold: true, color: { argb: BRAND.accentIndigo } };
        } else {
          // Text fields
          cell.alignment = { vertical: "top", horizontal: "left", wrapText: true };
        }
      });

      rowIndex++;
    }
  }

  // -------------------------------------------------------------
  // Sheet 3: Detailed Evaluation Guidance & Rubrics
  // -------------------------------------------------------------
  const rubricsSheet = workbook.addWorksheet("Evaluation Guidance", {
    views: [{ state: "frozen", ySplit: 1, showGridLines: true }],
  });

  rubricsSheet.columns = [
    { header: "Sub ID", key: "subId", width: 10 },
    { header: "Sub-Activity Title", key: "title", width: 30 },
    { header: "Thinking Skill", key: "tag", width: 22 },
    { header: "What the Evaluator Looks For", key: "studentExplanation", width: 44 },
    { header: "Observable Criteria Checkpoints", key: "criteria", width: 44 },
    { header: "Concrete Evidence Example", key: "concreteEvidence", width: 42 },
    { header: "Critical Pitfall to Avoid", key: "pitfallToAvoid", width: 40 },
    { header: "Meets Standard Threshold", key: "standard", width: 42 },
  ];

  styleHeaderRow(rubricsSheet.getRow(1), BRAND.subHeaderBg, BRAND.subHeaderFont);
  rubricsSheet.autoFilter = { from: "A1", to: "H1" };

  let rubIndex = 2;
  for (const act of activities) {
    for (const sub of act.subs) {
      const guidance = getEvaluationGuidance(sub);
      const isEven = rubIndex % 2 === 0;
      const rowBg = isEven ? BRAND.zebraBg : "FFFFFF";

      const criteriaText = guidance.evaluatorCriteria.map((c: string, i: number) => `${i + 1}. ${c}`).join("\n");

      const row = rubricsSheet.addRow({
        subId: sub.id,
        title: sub.title,
        tag: sub.tag,
        studentExplanation: guidance.studentExplanation,
        criteria: criteriaText,
        concreteEvidence: guidance.concreteEvidence,
        pitfallToAvoid: `⚠ ${guidance.pitfallToAvoid}`,
        standard: sub.standard,
      });

      row.height = 64; // Comfortably fit multiline guidance
      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: rowBg },
        };
        cell.border = BORDER_THIN;
        cell.font = { name: "Segoe UI", size: 9, color: { argb: "1E293B" } };

        if (colNumber === 1) {
          cell.alignment = { vertical: "top", horizontal: "center" };
          cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "0F172A" } };
        } else if (colNumber === 3) {
          cell.alignment = { vertical: "top", horizontal: "center" };
          cell.font = { name: "Segoe UI", size: 9, bold: true, color: { argb: BRAND.accentIndigo } };
        } else {
          cell.alignment = { vertical: "top", horizontal: "left", wrapText: true };
        }
      });

      rubIndex++;
    }
  }

  return workbook;
}

/**
 * Builds a consolidated Master Workbook containing all active courses
 */
export async function buildMasterCurriculumWorkbook(coursesList: CourseData[] = getAllCourses()): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "MSDSPD Academic Curriculum Portal";
  workbook.lastModifiedBy = "Curriculum Review System";
  workbook.created = new Date();
  workbook.modified = new Date();

  // Summary Sheet
  const summarySheet = workbook.addWorksheet("Curriculum Summary", {
    views: [{ showGridLines: true }],
  });

  summarySheet.columns = [
    { key: "colA", width: 24 },
    { key: "colB", width: 40 },
    { key: "colC", width: 14 },
    { key: "colD", width: 12 },
    { key: "colE", width: 14 },
    { key: "colF", width: 14 },
    { key: "colG", width: 16 },
  ];

  const titleRow = summarySheet.addRow(["M.Sc. DATA SCIENCE & PRODUCT DEVELOPMENT — MASTER CURRICULUM", "", "", "", "", "", ""]);
  summarySheet.mergeCells("A1:G1");
  titleRow.height = 36;
  const titleCell = summarySheet.getCell("A1");
  titleCell.font = { name: "Segoe UI", size: 14, bold: true, color: { argb: "FFFFFF" } };
  titleCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: BRAND.accentIndigo } };
  titleCell.alignment = { vertical: "middle", horizontal: "left", indent: 1 };

  summarySheet.addRow([]);

  const headerRow = summarySheet.addRow([
    "Course Code",
    "Course Title",
    "Category",
    "Credits",
    "Total Hours",
    "Activities",
    "Sub-Activities",
  ]);
  styleHeaderRow(headerRow);

  for (const cData of coursesList) {
    const stats = getCourseStats(cData);
    const r = summarySheet.addRow([
      cData.course.code,
      cData.course.title,
      cData.course.type === "elective" ? "Elective" : "Core",
      cData.course.credits,
      `${cData.course.totalHours} hrs`,
      stats.activityCount,
      stats.subActivityCount,
    ]);
    r.height = 24;
    r.eachCell((cell, colNumber) => {
      cell.border = BORDER_THIN;
      cell.font = { name: "Segoe UI", size: 10, color: { argb: "1E293B" } };
      if (colNumber === 1) {
        cell.font = { name: "Segoe UI", size: 10, bold: true, color: { argb: BRAND.accentIndigo } };
        cell.alignment = { vertical: "middle", horizontal: "center" };
      } else if (colNumber >= 3) {
        cell.alignment = { vertical: "middle", horizontal: "center" };
      } else {
        cell.alignment = { vertical: "middle", horizontal: "left" };
      }
    });
  }

  // Combined Master Activities Sheet
  const masterActSheet = workbook.addWorksheet("All Courses Activities", {
    views: [{ state: "frozen", ySplit: 1, showGridLines: true }],
  });

  masterActSheet.columns = [
    { header: "Course Code", key: "courseCode", width: 14 },
    { header: "Part", key: "part", width: 14 },
    { header: "Activity ID", key: "actId", width: 16 },
    { header: "Activity Title", key: "actTitle", width: 28 },
    { header: "Sub ID", key: "subId", width: 10 },
    { header: "Sub-Activity Title", key: "subTitle", width: 34 },
    { header: "Thinking Skill Tag", key: "tag", width: 22 },
    { header: "Hours", key: "subHours", width: 10 },
    { header: "Evidence Required", key: "evidence", width: 44 },
    { header: "Evaluation Standard", key: "standard", width: 44 },
  ];

  styleHeaderRow(masterActSheet.getRow(1));
  masterActSheet.autoFilter = { from: "A1", to: "J1" };

  let masterRowIdx = 2;
  for (const cData of coursesList) {
    for (const act of cData.activities) {
      for (const sub of act.subs) {
        const rowBg = masterRowIdx % 2 === 0 ? BRAND.zebraBg : "FFFFFF";
        const r = masterActSheet.addRow({
          courseCode: cData.course.code,
          part: act.part,
          actId: act.id,
          actTitle: act.title,
          subId: sub.id,
          subTitle: sub.title,
          tag: sub.tag,
          subHours: sub.hours,
          evidence: sub.evidence,
          standard: sub.standard,
        });
        r.height = 40;
        r.eachCell((cell, colNumber) => {
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: rowBg },
          };
          cell.border = BORDER_THIN;
          cell.font = { name: "Segoe UI", size: 9.5, color: { argb: "1E293B" } };
          if (colNumber <= 3 || colNumber === 5 || colNumber === 8) {
            cell.alignment = { vertical: "top", horizontal: "center" };
            if (colNumber === 1) cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: BRAND.accentIndigo } };
          } else if (colNumber === 7) {
            cell.alignment = { vertical: "top", horizontal: "center" };
            cell.font = { name: "Segoe UI", size: 9, bold: true, color: { argb: BRAND.accentIndigo } };
          } else {
            cell.alignment = { vertical: "top", horizontal: "left", wrapText: true };
          }
        });
        masterRowIdx++;
      }
    }
  }

  return workbook;
}

/**
 * Triggers a browser download of the course Excel file
 */
export async function downloadCourseExcel(courseData: CourseData): Promise<void> {
  const workbook = await buildCourseWorkbook(courseData);
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const sanitizedCode = courseData.course.code.replace(/[^a-zA-Z0-9_-]/g, "");
  a.download = `${sanitizedCode}_Curriculum_Activities_Plan.xlsx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

/**
 * Triggers a browser download of all courses in a single consolidated master Excel file
 */
export async function downloadAllCoursesExcel(): Promise<void> {
  const workbook = await buildMasterCurriculumWorkbook(getAllCourses());
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `MSDSPD_2026_Full_Curriculum_Master.xlsx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
