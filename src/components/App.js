import React, { useCallback, useState } from "react";
import SkillList from "./SkillList";

const App = () => {
  // Pre-added skills
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);

  const [skillInput, setSkillInput] = useState("");

  // Add skill (useCallback)
  const addSkill = useCallback(() => {
    const trimmedSkill = skillInput.trim();

    if (trimmedSkill === "") return;
    if (skills.includes(trimmedSkill)) return;

    setSkills((prev) => [...prev, trimmedSkill]);
    setSkillInput("");
  }, [skillInput, skills]);

  // Delete skill (useCallback)
  const deleteSkill = useCallback((skillToDelete) => {
    setSkills((prev) =>
      prev.filter((skill) => skill !== skillToDelete)
    );
  }, []);

  return (
    <div>
      <h2 id="heading">Skill Manager</h2>

      <input
        id="skill-input"
        type="text"
        value={skillInput}
        placeholder="Enter skill"
        onChange={(e) => setSkillInput(e.target.value)}
      />

      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>

      <SkillList skills={skills} deleteSkill={deleteSkill} />
    </div>
  );
};

export default App;
