import { Skill } from "../types";

interface SkillListProps {
    skills: Skill[];
}

const SkillList = ({ skills }: SkillListProps) => {
    return (
        <ul>
            {skills.map((skill) => (
                <li key={skill.id} style={{ color: getColor(skill.level) }}>
                    {skill.name} - {skill.level}
                </li>
            ))}
        </ul>
    );
};

const getColor = (level: Skill["level"]) => {
    switch (level) {
        case "Beginner":
            return "gray";
        case "Intermediate":
            return "orange";
        case "Expert":
            return "green";
        default:
            return "black";
    }
};

export default SkillList;