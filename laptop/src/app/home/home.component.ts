import {Component, Inject, OnInit} from '@angular/core';
import {Laptop} from "../shared/laptop";
import {LaptopService} from "../services/laptop.service";
import {flyIn} from "../animations/app.animation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyIn]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyIn()
  ]
})
export class HomeComponent implements OnInit {

  public firstPromotion!: Laptop;
  public secondPromotion!: Laptop;
  private laptops!: Laptop[];
  private featuredLaptops!: Laptop[];

  constructor(@Inject('BaseURL') public BaseURL: string,
              private laptopService: LaptopService) {
  }

  ngOnInit() {
    this.setPromotionLaptops();
  }

  private setPromotionLaptops() {
    this.laptopService.getLaptops()
      .subscribe(laptops => {
        this.laptops = laptops;
        this.setFeaturedLaptops();
      });
  }

  private setFeaturedLaptops() {
    this.laptopService.getFeaturedLaptops()
      .subscribe(featuredLaptops => {
        this.featuredLaptops = featuredLaptops;
        this.displayFeaturedLaptops();
      });
  }

  private displayFeaturedLaptops() {
    if (this.featuredLaptops.length >= 2) {
      this.firstPromotion = this.featuredLaptops[0];
      this.secondPromotion = this.featuredLaptops[1];
    } else if (this.featuredLaptops.length == 1) {
      this.firstPromotion = this.featuredLaptops[0];
      this.secondPromotion = this.laptops[0];
    } else {
      this.firstPromotion = this.laptops[0];
      this.secondPromotion = this.laptops[1];
    }
  }
}
