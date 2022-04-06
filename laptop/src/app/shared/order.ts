import {Laptop} from "./laptop";

export class Order {
  laptops: Laptop[] = [];
  totalSum!: string;
  username!: string;
  date: Date = new Date();
}
