import {Injectable} from '@angular/core';
import {Laptop} from '../shared/laptop'
import {Laptops} from "../shared/laptops"


@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  public getLaptops(): Laptop[] {
    return Laptops;
  }

  constructor() {
  }
}
