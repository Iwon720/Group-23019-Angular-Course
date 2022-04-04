import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MenuComponent} from './menu.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterTestingModule} from "@angular/router/testing";
import {PizzaService} from "../services/pizza.service";
import {baseURL} from "../shared/baseurl";
import {Observable, of} from "rxjs";
import {PIZZAS} from "../shared/pizzas";
import {Pizza} from "../shared/pizza";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {

    const pizzaServiceStub = {
      getPizzasWithDelay: function (): Observable<Pizza[]> {
        return of(PIZZAS);
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{
          path: 'menu',
          component: MenuComponent
        }]),
        MatGridListModule,
        MatProgressSpinnerModule
      ],
      declarations: [MenuComponent],
      providers: [
        {provide: PizzaService, useValue: pizzaServiceStub},
        {provide: 'BaseURL', useValue: baseURL}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('pizzas should be 6', () => {
    expect(component.pizzas.length).toBe(6);
  });

  it('should display pizza name in html', () => {
    fixture.detectChanges();
    let debug: DebugElement;
    let element: HTMLElement;
    debug = fixture.debugElement.query(By.css('h1'));
    element = debug.nativeElement;
    expect(element.textContent).toContain(PIZZAS[0].name.toUpperCase());
  });

  it('selected pizza', () => {
    expect(component.selectedPizza).toBeUndefined();
    const pizza = component.pizzas[0];
    component.onSelect(pizza);
    expect(component.selectedPizza).toBe(pizza);
  });
});
