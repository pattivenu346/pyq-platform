import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollegeById, getCollegePyqs } from "@/lib/data";

export default async function ViewerPage({ params }: { params: Promise<{ collegeId: string; paperId: string }> }) {
  const { collegeId, paperId } = await params;
  const college = getCollegeById(collegeId);

  if (!college) {
    notFound();
  }

  const paper = getCollegePyqs(collegeId).find((item) => item.id === paperId);

  if (!paper) {
    notFound();
  }

  return (
    <main className="container">
      <div className="topbar">
        <div>
          <Link className="muted" href={`/college/${collegeId}`}>
            ← Back to PYQs
          </Link>
          <div className="brand">PDF Viewer · {paper.subject}</div>
        </div>
        <div className="buttonRow">
          <input placeholder="Search in PDF" />
          <Link className="button" href={`/college/${collegeId}/exam-structures`}>
            Exam structures
          </Link>
        </div>
      </div>

      <section className="viewerLayout">
        <article className="pdfMock">
          <h3>{paper.subject}</h3>
          <p className="muted">Mock in-app PDF view for prototype.</p>
          <p className="muted">Pages: {paper.pages}</p>
          <hr style={{ borderColor: "#31416f" }} />
          <p>
            Q1. Explain the concept in detail.<br />
            Q2. Compare and contrast two methods.<br />
            Q3. Solve the numerical problem shown.
          </p>
        </article>

        <aside className="rightPanel">
          <h4>Document details</h4>
          <p className="muted">Subject: {paper.subject}</p>
          <p className="muted">Year: {paper.year}</p>
          <p className="muted">Department: {paper.department}</p>
          <p className="muted">Exam Type: {paper.examType}</p>
          <p className="muted">File Size: {paper.fileSize}</p>
          <p className="muted">Uploaded: {paper.uploadedAt}</p>
          <a className="button" href="#" onClick={(event) => event.preventDefault()}>
            Download
          </a>
        </aside>
      </section>
    </main>
  );
}
