import Link from "next/link";
import { colleges, pyqs } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="container">
      <div className="topbar">
        <div>
          <div className="brand">Subjectwise</div>
          <div className="muted">Find previous year questions and exam structures college-wise.</div>
        </div>
      </div>

      <section className="card headerCard">
        <h2>PYQ Platform Prototype</h2>
        <p className="muted">
          Browse colleges, open a specific college page, search and filter PYQs, view/download papers, and access exam structure notes.
        </p>
        <div className="buttonRow">
          <span className="badge">Colleges: {colleges.length}</span>
          <span className="badge">Total PYQs: {pyqs.length}</span>
        </div>
      </section>

      <section className="grid colleges">
        {colleges.map((college) => (
          <article key={college.id} className="card">
            <h3>{college.name}</h3>
            <p className="muted">{college.location}</p>
            <p className="muted">Departments: {college.departments.join(", ")}</p>
            <div className="buttonRow">
              <Link className="button" href={`/college/${college.id}`}>
                Open PYQs
              </Link>
              <Link className="button" href={`/admin/${college.id}`}>
                Admin Dashboard
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
