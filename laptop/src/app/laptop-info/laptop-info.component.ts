import {Component, Input, OnInit} from '@angular/core';
import {Laptop} from "../shared/laptop";

@Component({
  selector: 'app-laptop-detail',
  templateUrl: './laptop-info.component.html', styleUrls: ['./laptop-info.component.scss']
})
export class LaptopInfoComponent implements OnInit {
  @Input() public laptop!: Laptop;

  constructor() {
  }

  ngOnInit(): void {
  }
}
