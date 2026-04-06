import { notFound } from "next/navigation";
import CollegeClient from "./CollegeClient";
import { getCollegeById, getCollegePyqs } from "@/lib/data";

export default async function CollegePage({ params }: { params: Promise<{ collegeId: string }> }) {
  const { collegeId } = await params;
  const college = getCollegeById(collegeId);

  if (!college) {
    notFound();
  }

  const papers = getCollegePyqs(collegeId);

  return <CollegeClient college={college} papers={papers} />;
}
