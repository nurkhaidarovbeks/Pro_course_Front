import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";

import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy loading страниц
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

// Обычная главная страница
function Home() {
  return <h1>Home Page</h1>;
}

// UI если произошла ошибка
function ErrorFallback() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Something went wrong</h2>
      <button onClick={() => window.location.reload()}>
        Reload Page
      </button>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      {/* Error Boundary ловит ошибки */}
      <ErrorBoundary fallback={<ErrorFallback />}>

        {/* Suspense показывает spinner при загрузке */}
        <Suspense fallback={<LoadingSpinner />}>

          <Routes>

            <Route path="/" element={<Home />} />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

          </Routes>

        </Suspense>

      </ErrorBoundary>

    </BrowserRouter>
  );
}