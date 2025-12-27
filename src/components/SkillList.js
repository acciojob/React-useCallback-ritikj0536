import React from "react";

const SkillList = React.memo(({ skills, deleteSkill }) => {
  return (
    <ul>
      {skills.map((skill, idx) => (
        <li
          key={idx}
          id={`skill-number-${idx}`}
          onClick={() => deleteSkill(skill)}
          style={{ cursor: "pointer" }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

export default SkillList;
