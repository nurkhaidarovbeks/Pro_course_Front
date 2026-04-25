import { GetServerSideProps } from "next";
import Link from "next/link";
import {
  Analytics,
  getCurrentUser,
  getUserAnalytics,
  getUserNotifications,
  Notification,
  User,
} from "@/lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: Analytics;
  currentTime: string;
}

export default function Dashboard({
  user,
  notifications,
  analytics,
  currentTime,
}: DashboardProps) {
  const unreadCount = notifications.filter((notification) => {
    return !notification.read;
  }).length;

  return (
    <main className="container">
      <Link href="/">← Back to Home</Link>

      <header className="card">
        <h1>Welcome, {user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </header>

      <section className="card">
        <h2>Analytics</h2>

        <div className="stats">
          <div>Page Views: {analytics.pageViews.toLocaleString()}</div>
          <div>Sessions: {analytics.sessions.toLocaleString()}</div>
          <div>Bounce Rate: {analytics.bounceRate.toFixed(1)}%</div>
        </div>
      </section>

      <section className="card">
        <h2>Notifications ({unreadCount} unread)</h2>

        <ul>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={notification.read ? "read" : "unread"}
            >
              <span className={`type ${notification.type}`}>
                {notification.type}
              </span>{" "}
              {notification.message} — {notification.createdAt}
            </li>
          ))}
        </ul>
      </section>

      <footer className="card">
        <p>Last updated: {currentTime}</p>
        <p>
          Refresh this page. The analytics numbers and time change because this
          page uses SSR.
        </p>
      </footer>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<
  DashboardProps
> = async () => {
  try {
    const user = getCurrentUser();

    const [notifications, analytics] = await Promise.all([
      getUserNotifications(user.id),
      getUserAnalytics(user.id),
    ]);

    return {
      props: {
        user,
        notifications,
        analytics,
        currentTime: new Date().toISOString(),
      },
    };
  } catch (error) {
    console.error("Dashboard SSR error:", error);

    return {
      notFound: true,
    };
  }
};