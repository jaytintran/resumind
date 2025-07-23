import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind | A.I Powered Resume Analyzer" },
    { name: "description", content: "Smart feedback for your dream jobs." },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover bg-center">
      {/* NAVIGATION */}
      <Navbar />

      {/* HERO SECTION*/}
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review Your Submissions & Check A.I Feedbacks</h2>
        </div>

        {/*  RESUME SECTION */}
        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
