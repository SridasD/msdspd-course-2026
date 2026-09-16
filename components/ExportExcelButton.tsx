"use client";

import { Check, Download, FileSpreadsheet, Loader2 } from "lucide-react";
import { useState } from "react";
import { downloadAllCoursesExcel, downloadCourseExcel } from "@/lib/excelExport";
import type { CourseData } from "@/lib/types";

interface ExportExcelButtonProps {
  courseData?: CourseData;
  isMaster?: boolean;
  variant?: "primary" | "secondary" | "outline" | "toolbar";
  className?: string;
  label?: string;
}

export function ExportExcelButton({
  courseData,
  isMaster = false,
  variant = "outline",
  className = "",
  label,
}: ExportExcelButtonProps) {
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleExport = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      if (isMaster || !courseData) {
        await downloadAllCoursesExcel();
      } else {
        await downloadCourseExcel(courseData);
      }
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2500);
    } catch (err) {
      console.error("Failed to export Excel file:", err);
      // Fallback: trigger API route download directly
      const fallbackUrl = isMaster
        ? "/api/courses/all/export"
        : `/api/courses/${courseData?.slug ?? "cs102"}/export`;
      window.location.href = fallbackUrl;
    } finally {
      setLoading(false);
    }
  };

  const defaultLabel = isMaster
    ? "Export All Courses (.xlsx)"
    : label ?? "Export to Excel (.xlsx)";

  if (variant === "toolbar") {
    return (
      <button
        type="button"
        onClick={handleExport}
        disabled={loading}
        title="Download activities, sub-activities, and evaluation rubrics as formatted Excel sheet"
        className={`inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:border-indigo-300 hover:bg-slate-50 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-60 ${className}`}
      >
        {loading ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin text-indigo-600" />
        ) : downloaded ? (
          <Check className="h-3.5 w-3.5 text-emerald-600" />
        ) : (
          <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />
        )}
        <span>{downloaded ? "Downloaded!" : defaultLabel}</span>
      </button>
    );
  }

  if (variant === "primary") {
    return (
      <button
        type="button"
        onClick={handleExport}
        disabled={loading}
        className={`inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:opacity-60 ${className}`}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : downloaded ? (
          <Check className="h-4 w-4" />
        ) : (
          <FileSpreadsheet className="h-4 w-4" />
        )}
        <span>{downloaded ? "Downloaded!" : defaultLabel}</span>
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        type="button"
        onClick={handleExport}
        disabled={loading}
        className={`inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:opacity-60 ${className}`}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-emerald-600" />
        ) : downloaded ? (
          <Check className="h-4 w-4 text-emerald-600" />
        ) : (
          <FileSpreadsheet className="h-4 w-4 text-emerald-600" />
        )}
        <span>{downloaded ? "Downloaded!" : defaultLabel}</span>
      </button>
    );
  }

  // Default "outline" variant
  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={loading}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/50 hover:text-emerald-700 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:opacity-60 ${className}`}
    >
      {loading ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-600" />
      ) : downloaded ? (
        <Check className="h-3.5 w-3.5 text-emerald-600" />
      ) : (
        <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />
      )}
      <span>{downloaded ? "Downloaded!" : defaultLabel}</span>
    </button>
  );
}
