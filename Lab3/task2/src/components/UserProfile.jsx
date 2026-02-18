import { useEffect, useState } from "react";

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect (() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setLoading(true);
        setError(null);

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }
                return response.json();
            })
            .then((data) => {
                setUser(data);
                setLoading(false);
            })
            .catch((err) => {
                if (err.name != "AbortError") {   // ← исправлено
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => {
            controller.abort();
        };
    }, [userId]);   // ← здесь у тебя тоже не хватало ]

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        user && (
            <div>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Company: {user.company.name}</p>
            </div>
        )
    );
}

export default UserProfile;
