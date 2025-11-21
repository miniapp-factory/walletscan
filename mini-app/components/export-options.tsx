"use client";
import { cn } from "@/lib/utils";

export default function ExportOptions() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Export Options</h2>
      {/* Replace with real export buttons */}
      <div className="flex gap-2">
        <button className="btn btn-primary">Export PDF</button>
        <button className="btn btn-secondary">Export JSON</button>
        <button className="btn btn-secondary">Share as Cast</button>
      </div>
    </section>
  );
}
