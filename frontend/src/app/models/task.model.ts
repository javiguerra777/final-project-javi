export type Task = {
  id: number;
  name: string;
  status: string;
  projectId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
};

export type OrganizedTask = {
  id: number;
  name: string;
  data: Task[];
};