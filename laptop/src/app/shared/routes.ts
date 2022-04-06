import {Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {CatalogComponent} from "../catalog/catalog.component";
import {ContactComponent} from "../contact/contact.component";
import {AboutComponent} from "../about/about.component";
import {LaptopInfoComponent} from "../laptop-info/laptop-info.component";
import {PlaceOrderComponent} from "../place-order/place-order.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'laptop-info/:id',
    component: LaptopInfoComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'order',
    component: PlaceOrderComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
