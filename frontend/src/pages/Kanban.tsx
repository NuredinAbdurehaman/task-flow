import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIssues, updateIssueStatus } from "../api/issue";

type Issue = {
  id: string;
  title: string;
  status: string;
};

export default function Kanban() {
  const [issues, setIssues] = useState<Issue[]>([]);

  const { projectId } = useParams();

  const loadIssues = async () => {
    if (!projectId) return;

    const data = await getIssues(projectId);
    setIssues(data);
  };

  const move = async (issueId: string, status: string) => {
    await updateIssueStatus(issueId, status);
    loadIssues();
  };

  useEffect(() => {
    loadIssues();
  }, []);

  const todo = issues.filter((i) => i.status === "TODO");

  const inProgress = issues.filter(
    (i) => i.status === "IN_PROGRESS"
  );

  const done = issues.filter((i) => i.status === "DONE");

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      
      {/* TODO */}
      <div>
        <h3>TODO</h3>

        {todo.map((i) => (
          <div key={i.id}>
            <p>{i.title}</p>

            <button
              onClick={() => move(i.id, "IN_PROGRESS")}
            >
              Start
            </button>
          </div>
        ))}
      </div>

      {/* IN PROGRESS */}
      <div>
        <h3>IN PROGRESS</h3>

        {inProgress.map((i) => (
          <div key={i.id}>
            <p>{i.title}</p>

            <button
              onClick={() => move(i.id, "DONE")}
            >
              Done
            </button>
          </div>
        ))}
      </div>

      {/* DONE */}
      <div>
        <h3>DONE</h3>

        {done.map((i) => (
          <div key={i.id}>
            <p>{i.title}</p>
          </div>
        ))}
      </div>

    </div>
  );
}