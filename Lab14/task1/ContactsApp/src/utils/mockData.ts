import { Contact } from "../types";

const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"];

export const generateContacts = (count: number): Contact[] => {
  return Array.from({ length: count }, (_, index) => {
    return {
      id: contact_${index}_${Date.now()},
      firstName: "User",
      lastName: Number ${index + 1},
      email: student${index}@almau.edu.kz,
      avatarColor: COLORS[index % COLORS.length],
    };
  });
};