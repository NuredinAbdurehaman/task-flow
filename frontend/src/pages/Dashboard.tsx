import { useEffect, useState } from "react";
import { createProject, getProjects } from "../api/project";

export default function Dashboard() {
  const [projects, setProjects] = useState<any[]>([]);
  const [name, setName] = useState("");

  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  const handleCreate = async () => {
    await createProject(name);
    setName("");
    loadProjects();
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div>
      <h2>Projects</h2>

      <input
        placeholder="Project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>

      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}