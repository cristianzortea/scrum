import { Story } from "./story";

export interface Column {
    id?: number;
    name?: string;
    position?: number;
    stories?: Story[];
}