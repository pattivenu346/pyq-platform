import Link from "next/link";
import { notFound } from "next/navigation";
import { examStructures, getCollegeById } from "@/lib/data";

export default async function ExamStructuresPage({ params }: { params: Promise<{ collegeId: string }> }) {
  const { collegeId } = await params;
  const college = getCollegeById(collegeId);

  if (!college) {
    notFound();
  }

  return (
    <main className="container">
      <div className="topbar">
        <div>
          <Link className="muted" href={`/college/${collegeId}`}>
            ← Back to college PYQs
          </Link>
          <div className="brand">{college.name} · Exam Structures</div>
        </div>
      </div>

      <section className="grid exam">
        {examStructures.map((item) => (
          <article key={item.id} className="card">
            <h3>{item.title}</h3>
            <p className="muted">{item.details}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
