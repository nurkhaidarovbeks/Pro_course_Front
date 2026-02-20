import UserCard from "./components/UserCard";
import SkillList from "./components/SkillList";
import { Skill, User } from "./types";

function App() {
    const user: User = {
        name: "Alex",
        email: "alex@mail.com",
        age: 24,
    };

    const skills: Skill[] = [
        { id: 1, name: "React", level: "Intermediate" },
        { id: 2, name: "TypeScript", level: "Beginner" },
        { id: 3, name: "Node.js", level: "Expert" },
    ];

    return (
        <UserCard user={user} isActive={true}>
            <p>Bio: Frontend developer</p>
            <SkillList skills={skills} />
        </UserCard>
    );
}

export default App;