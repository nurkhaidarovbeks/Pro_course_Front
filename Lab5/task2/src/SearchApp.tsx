import { useState, ChangeEvent } from "react";
import { User } from "./types";

const INITIAL_DATA: User[] = [
    { name: "Alice", email: "alice@mail.com", age: 25 },
    { name: "Bob", email: "bob@mail.com", age: 30 },
    { name: "Charlie", email: "charlie@mail.com", age: 28 },
    { name: "Diana", email: "diana@mail.com", age: 22 },
    { name: "Evan", email: "evan@mail.com", age: 35 },
];

function SearchApp() {
    // allUsers теперь является простой константой, так как она не меняется
    const allUsers: User[] = INITIAL_DATA; 
    const [filteredUsers, setFilteredUsers] = useState<User[]>(allUsers);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);

        setFilteredUsers(
            allUsers.filter((u) => // Используем allUsers вместо users из useState
                u.name.toLowerCase().includes(term.toLowerCase())
            )
        );
    };

    // event был удален, так как он не используется
    const handleClear = () => { 
        setSearchTerm("");
        setFilteredUsers(allUsers); // Используем allUsers
    };

    return (
        <div>
            <h1>User Search</h1>

            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearch}
            />

            <button onClick={handleClear}>Clear</button>

            {filteredUsers.length === 0 && <p>No results found</p>}

            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.email}>
                        {user.name} ({user.email}) - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchApp;
