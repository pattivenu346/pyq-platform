export type ExamType = "Midterm" | "End Semester" | "Supplementary";

export type Pyq = {
  id: string;
  collegeId: string;
  subject: string;
  year: string;
  department: string;
  examType: ExamType;
  pages: number;
  fileSize: string;
  uploadedAt: string;
};

export type College = {
  id: string;
  name: string;
  location: string;
  departments: string[];
};

export const colleges: College[] = [
  {
    id: "mbu",
    name: "Mohan Babu University",
    location: "Tirupati, Andhra Pradesh",
    departments: ["CSE", "ECE", "MECH", "CIVIL", "EEE"],
  },
  {
    id: "vits",
    name: "Vellore Institute of Tech (Sample)",
    location: "Vellore, Tamil Nadu",
    departments: ["CSE", "IT", "ECE", "MECH"],
  },
  {
    id: "srm",
    name: "SRM Institute (Sample)",
    location: "Chennai, Tamil Nadu",
    departments: ["CSE", "AIML", "ECE", "BBA"],
  },
];

export const pyqs: Pyq[] = [
  { id: "mbu-ds-2024-mid", collegeId: "mbu", subject: "Data Structures", year: "2024", department: "CSE", examType: "Midterm", pages: 8, fileSize: "1.2 MB", uploadedAt: "2026-01-12" },
  { id: "mbu-ds-2023-end", collegeId: "mbu", subject: "Data Structures", year: "2023", department: "CSE", examType: "End Semester", pages: 12, fileSize: "1.8 MB", uploadedAt: "2025-11-04" },
  { id: "mbu-os-2024-end", collegeId: "mbu", subject: "Operating Systems", year: "2024", department: "CSE", examType: "End Semester", pages: 10, fileSize: "1.6 MB", uploadedAt: "2026-02-20" },
  { id: "mbu-dbms-2022-sup", collegeId: "mbu", subject: "Database Management Systems", year: "2022", department: "CSE", examType: "Supplementary", pages: 9, fileSize: "1.4 MB", uploadedAt: "2025-09-16" },
  { id: "mbu-signals-2024-mid", collegeId: "mbu", subject: "Signals and Systems", year: "2024", department: "ECE", examType: "Midterm", pages: 7, fileSize: "0.9 MB", uploadedAt: "2026-03-04" },
  { id: "mbu-thermo-2023-end", collegeId: "mbu", subject: "Thermodynamics", year: "2023", department: "MECH", examType: "End Semester", pages: 11, fileSize: "2.1 MB", uploadedAt: "2025-12-08" },
  { id: "vits-ai-2024-end", collegeId: "vits", subject: "Artificial Intelligence", year: "2024", department: "CSE", examType: "End Semester", pages: 10, fileSize: "1.7 MB", uploadedAt: "2026-03-14" },
  { id: "srm-cn-2024-mid", collegeId: "srm", subject: "Computer Networks", year: "2024", department: "CSE", examType: "Midterm", pages: 8, fileSize: "1.3 MB", uploadedAt: "2026-02-25" },
];

export const examStructures = [
  {
    id: "pattern",
    title: "Exam Patterns",
    details: "2 Midterms + 1 End Semester exam. Midterms focus on core concepts; End Semester covers all units.",
  },
  {
    id: "evaluation",
    title: "Evaluation Criteria",
    details: "Internal marks (assignments + quizzes + midterm) contribute 40%; end semester contributes 60%.",
  },
  {
    id: "marks",
    title: "Marks Gain Type",
    details: "Short answers, long problems, and descriptive questions with a focus on problem solving and clarity.",
  },
];

export const toolSummaries = [
  {
    id: "pks",
    title: "PKS · PDF Keyword Searcher",
    detail: "Search a keyword and jump to exact matching pages across uploaded PDFs.",
  },
  {
    id: "pse",
    title: "PSE · PDF Specific Extractor",
    detail: "Select page numbers and extract only those pages into a new shareable PDF.",
  },
];

export function getCollegeById(collegeId: string) {
  return colleges.find((college) => college.id === collegeId);
}

export function getCollegePyqs(collegeId: string) {
  return pyqs.filter((paper) => paper.collegeId === collegeId);
}
