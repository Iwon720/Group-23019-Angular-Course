import {Component, Inject, OnInit} from '@angular/core';
import {Laptop} from "../shared/laptop";
import {LaptopService} from "../services/laptop.service";
import {flyIn} from "../animations/app.animation";

@Component({
  selector: 'app-menu',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  host: {
    '[@flyIn]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyIn()
  ]
})
export class CatalogComponent implements OnInit {

  public laptops!: Laptop[];
  public selectedLaptop!: Laptop;

  constructor(@Inject('BaseURL') public BaseURL: string,
              private laptopService: LaptopService) {
  }

  ngOnInit(): void {
    this.laptopService.getLaptops()
      .subscribe(laptops => this.laptops = laptops);
  }

  public onSelect(laptop: Laptop): void {
    this.selectedLaptop = laptop;
  }
}
