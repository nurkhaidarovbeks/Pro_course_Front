export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "admin" | "user";
}

export interface Notification {
  id: string;
  type: "info" | "warning" | "success";
  message: string;
  read: boolean;
  createdAt: string;
}

export interface Analytics {
  pageViews: number;
  sessions: number;
  bounceRate: number;
}

export function getCurrentUser(): User {
  return {
    id: "user-123",
    name: "Demo User",
    email: "demo@example.com",
    avatar: "/avatars/demo.jpg",
    role: "user",
  };
}

export async function getUserNotifications(
  userId: string
): Promise<Notification[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    {
      id: "1",
      type: "info",
      message: `Welcome to the dashboard, ${userId}!`,
      read: false,
      createdAt: "2026-03-01",
    },
    {
      id: "2",
      type: "success",
      message: "Your profile was updated",
      read: true,
      createdAt: "2026-02-28",
    },
    {
      id: "3",
      type: "warning",
      message: "Please review your account settings",
      read: false,
      createdAt: "2026-03-04",
    },
  ];
}

export async function getUserAnalytics(userId: string): Promise<Analytics> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  console.log(`Fetching analytics for user: ${userId}`);

  return {
    pageViews: Math.floor(Math.random() * 10000),
    sessions: Math.floor(Math.random() * 1000),
    bounceRate: Math.random() * 100,
  };
}