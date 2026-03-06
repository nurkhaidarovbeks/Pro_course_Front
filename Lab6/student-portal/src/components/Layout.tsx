import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <nav style={{ display: "flex", gap: "20px", padding: "10px"}}>
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/about">About</Link>
            </nav>

            <main style={{ padding: "20px" }}>
                <Outlet />
            </main>
            <footer style={{ marginTop: "40px"}}>
                Student Portal 2026
            </footer>
        </>
    );
}