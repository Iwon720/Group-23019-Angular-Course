import {Component, OnInit} from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {HttpService} from "../services/http.service";
import {Order} from "../shared/order";
import {LaptopService} from "../services/laptop.service";
import {Laptop} from "../shared/laptop";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public displayedColumns: string[] = ['pizza', 'price', 'count', 'sum', 'delete'];
  public totalSum!: string;
  private order: Order = new Order();

  constructor(public laptopService: LaptopService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<OrderComponent>,
              private router: Router,
              private http: HttpService) {
  }

  ngOnInit(): void {
    this.calculateTotalOrderSum();
  }

  public displayedLaptopList(): Laptop[] {
    return [...new Map(this.laptopService.orderedLaptops.map(laptop => [laptop.id, laptop])).values()]
      .sort((a, b) => (
        a.name.localeCompare(b.name))
      );
  }

  public calculateLaptopSum(chosenLaptop: Laptop): string {
    return (this.countLaptops(chosenLaptop) * Number(chosenLaptop.price))
      .toFixed(2);
  }

  public calculateTotalOrderSum(): void {
    this.totalSum = this.laptopService.orderedLaptops
      .map((laptop => (Number(laptop.price))))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  }

  public removeFromOrder(deletedLaptop: Laptop): void {
    this.laptopService.orderedLaptops = this.laptopService.orderedLaptops.filter(laptop => laptop !== deletedLaptop);
    this.calculateTotalOrderSum();
  }

  public countLaptops(chosenLaptop: Laptop): number {
    return this.laptopService.orderedLaptops.filter(laptop => laptop.id == chosenLaptop.id).length;
  }

  public addLaptop(chosenLaptop: Laptop): void {
    this.laptopService.orderedLaptops.push(chosenLaptop);
    this.calculateTotalOrderSum();
  }

  public removeLaptop(chosenLaptop: Laptop): void {
    const numberOfLaptops: number = this.laptopService.orderedLaptops.filter(laptop => laptop == chosenLaptop).length;
    this.laptopService.orderedLaptops = this.laptopService.orderedLaptops.filter(laptop => laptop !== chosenLaptop);
    for (let i = 0; i < numberOfLaptops - 1; i++) {
      this.laptopService.orderedLaptops.push(chosenLaptop);
    }
    this.calculateTotalOrderSum();
  }

  public openLoginForm(): void {
    this.dialog.open(LoginComponent, {
        width: '500px',
        height: '300px'
      }
    );
  }

  public onSubmit(): void {
    this.dialogRef.close();
    this.order.laptops = this.laptopService.orderedLaptops;
    this.order.username = this.laptopService.user.username;
    this.order.totalSum = this.totalSum;
    this.http.save(this.order, this.laptopService.ordersLink);
    this.router.navigate(['/order']);
    this.laptopService.orderedLaptops = [];
  }
}
