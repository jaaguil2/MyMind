import { Owner } from "./owner";

export interface Room {
  _id: string;
  name: string;
  thoughts: string;
  links: [],
  owner: Owner
}