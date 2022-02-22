import {Component, OnInit} from '@angular/core';
import {Laptop} from "../shared/laptop"
import {LaptopService} from "../services/laptop.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public laptops!: Laptop[];

  public selectedLaptop!: Laptop;

  constructor(private laptopService: LaptopService) {
  }

  public onSelect(laptop: Laptop): void {
    this.selectedLaptop = laptop;
  }

  ngOnInit(): void {
    this.laptops = this.laptopService.getLaptops();
  }

}
