import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollegeById, getCollegePyqs, toolSummaries } from "@/lib/data";

export default async function AdminPage({ params }: { params: Promise<{ collegeId: string }> }) {
  const { collegeId } = await params;
  const college = getCollegeById(collegeId);

  if (!college) {
    notFound();
  }

  const papers = getCollegePyqs(collegeId);
  const activeDepartments = new Set(papers.map((paper) => paper.department));
  const activeSubjects = new Set(papers.map((paper) => paper.subject));

  return (
    <main className="container">
      <div className="topbar">
        <div>
          <Link className="muted" href="/">
            ← Back to homepage
          </Link>
          <div className="brand">Admin Dashboard · {college.name}</div>
        </div>
      </div>

      <section className="adminStats">
        <article className="card">
          <div className="muted">No. of PDFs</div>
          <h2>{papers.length}</h2>
        </article>
        <article className="card">
          <div className="muted">Active subjects</div>
          <h2>{activeSubjects.size}</h2>
        </article>
        <article className="card">
          <div className="muted">Active depart</div>
          <h2>{activeDepartments.size}</h2>
        </article>
        <article className="card">
          <div className="muted">Pending review</div>
          <h2>3</h2>
        </article>
      </section>

      <section className="grid" style={{ gridTemplateColumns: "1fr 1fr", marginBottom: 16 }}>
        <article className="card">
          <h3>Add New Resource</h3>
          <p className="muted">Upload a PYQ or exam structure PDF for this college.</p>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", marginBottom: 10 }}>
            <input placeholder="Subject Name" />
            <input placeholder="Year" />
            <select>
              <option>Department</option>
              {college.departments.map((department) => (
                <option key={department}>{department}</option>
              ))}
            </select>
            <select>
              <option>Exam Type</option>
              <option>Midterm</option>
              <option>End Semester</option>
              <option>Supplementary</option>
            </select>
          </div>
          <button type="button">Add New</button>
        </article>

        <article className="card">
          <h3>Remove / Manage PDFs</h3>
          {papers.slice(0, 4).map((paper) => (
            <div key={paper.id} className="buttonRow" style={{ justifyContent: "space-between", marginBottom: 8 }}>
              <span className="muted">
                {paper.subject} ({paper.year})
              </span>
              <button type="button">Remove PDF</button>
            </div>
          ))}
        </article>
      </section>

      <section className="card">
        <h3>Admin Tools (PKS + PSE)</h3>
        <p className="muted">Unified workspace so admins can search keywords and extract specific pages quickly.</p>
        {toolSummaries.map((tool) => (
          <div key={tool.id} className="toolItem">
            <strong>{tool.title}</strong>
            <p className="muted">{tool.detail}</p>
          </div>
        ))}
        <button type="button">Open Tool Workspace</button>
      </section>
    </main>
  );
}
