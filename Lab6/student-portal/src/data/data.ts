export interface Course {
  id: number
  title: string
  instructor: string
  description: string
}

export const courses: Course[] = [
  {
    id: 1,
    title: "React Basics",
    instructor: "John Smith",
    description: "Introduction to React"
  },
  {
    id: 2,
    title: "Advanced React",
    instructor: "Jane Doe",
    description: "Hooks and optimization"
  },
  {
    id: 3,
    title: "TypeScript",
    instructor: "Alex Johnson",
    description: "Static typing in JavaScript"
  },
  {
    id: 4,
    title: "Web Security",
    instructor: "Michael Brown",
    description: "Security principles"
  }
]

export function getCourseById(id: number) {
  return courses.find((course) => course.id === id)
}