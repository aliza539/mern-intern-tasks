export enum Priority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high"
}

export type Status = "to-do" | "done";

export interface Task {
  id: number;
  description: string;
  status: Status;
  priority: Priority;
  createdAt: Date;
  updatedAt: Date;
}