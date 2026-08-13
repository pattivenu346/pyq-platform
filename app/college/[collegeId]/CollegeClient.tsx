"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { College, ExamType, Pyq } from "@/lib/data";

type Props = {
  college: College;
  papers: Pyq[];
};

const examTypes: ExamType[] = ["Midterm", "End Semester", "Supplementary"];

export default function CollegeClient({ college, papers }: Props) {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [examTypeFilter, setExamTypeFilter] = useState("all");

  const years = Array.from(new Set(papers.map((paper) => paper.year))).sort((a, b) => Number(b) - Number(a));

  const filtered = useMemo(() => {
    return papers.filter((paper) => {
      const matchesSearch = paper.subject.toLowerCase().includes(search.toLowerCase());
      const matchesYear = yearFilter === "all" || paper.year === yearFilter;
      const matchesDepartment = departmentFilter === "all" || paper.department === departmentFilter;
      const matchesExamType = examTypeFilter === "all" || paper.examType === examTypeFilter;
      return matchesSearch && matchesYear && matchesDepartment && matchesExamType;
    });
  }, [papers, search, yearFilter, departmentFilter, examTypeFilter]);

  return (
    <main className="container">
      <div className="topbar">
        <div>
          <Link className="muted" href="/">
            ← Back to colleges
          </Link>
          <div className="brand">{college.name}</div>
        </div>
        <Link className="button" href={`/college/${college.id}/exam-structures`}>
          Exam structures
        </Link>
      </div>

      <section className="card headerCard">
        <h2>College PYQ Page</h2>
        <p className="muted">Search and filter by year, department, and exam type. Then open the paper viewer or download.</p>
      </section>

      <section className="filters">
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search subject" />
        <select value={yearFilter} onChange={(event) => setYearFilter(event.target.value)}>
          <option value="all">All years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select value={departmentFilter} onChange={(event) => setDepartmentFilter(event.target.value)}>
          <option value="all">All departments</option>
          {college.departments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
        <select value={examTypeFilter} onChange={(event) => setExamTypeFilter(event.target.value)}>
          <option value="all">All exam types</option>
          {examTypes.map((examType) => (
            <option key={examType} value={examType}>
              {examType}
            </option>
          ))}
        </select>
      </section>

      <section className="grid pyq">
        {filtered.map((paper) => (
          <article className="card" key={paper.id}>
            <h3>{paper.subject}</h3>
            <div className="muted">
              <strong>Year:</strong> {paper.year}
            </div>
            <div className="muted">
              <strong>Department:</strong> {paper.department}
            </div>
            <div className="muted">
              <strong>Exam Type:</strong> {paper.examType}
            </div>
            <div className="buttonRow" style={{ marginTop: 12 }}>
              <Link className="button" href={`/college/${college.id}/viewer/${paper.id}`}>
                View
              </Link>
              <a className="button" href="#" onClick={(event) => event.preventDefault()}>
                Download
              </a>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <article className="card">
            <h4>No matching PYQs</h4>
            <p className="muted">Try clearing one or more filters.</p>
          </article>
        )}
      </section>
    </main>
  );
}
