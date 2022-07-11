import { Story } from "./story";

export interface Column {
    id: number;
    name: string;
    color: string;
    stories: Story[];
  }