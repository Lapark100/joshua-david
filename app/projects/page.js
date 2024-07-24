import H1 from "@/components/h1";
export const metadata = {
  title: "Projects"
};

// Main component
import { Suspense } from "react";
import ProjectList from "./components/project-list";
import ProjectListLoading from "./components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";

export default async function Projects() {

  

  return (
    <div>
      
      <H1>Projects</H1>
      
      <ErrorBoundary >
      <Suspense fallback={<ProjectListLoading />}>
      <ProjectList />
      </Suspense>
      </ErrorBoundary>
    </div>
  );
}
