"use client";

import { useMutation, useQuery } from "convex/react";

import { Button } from "@/components/ui/button";

import { api } from "../../convex/_generated/api";

export default function Home() {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);

  const handleCreateProject = () => {
    createProject({ name: "Test Project" });
  };

  return (
    <div>
      {projects?.map((project) => (
        <div key={project._id}>
          <p>{project.name}</p>
          <p>{project.importStatus}</p>
          <p>{project.ownerId}</p>
        </div>
      ))}
      <Button onClick={handleCreateProject}>Create Project</Button>
    </div>
  );
}
