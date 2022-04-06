import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CatalogComponent} from './catalog.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterTestingModule} from "@angular/router/testing";
import {LaptopService} from "../services/laptop.service";
import {baseURL} from "../shared/baseurl";
import {Observable, of} from "rxjs";
import {LAPTOPS} from "../shared/laptops";
import {Laptop} from "../shared/laptop";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async () => {

    const laptopServiceStub = {
      getLaptopsWithDelay: function (): Observable<Laptop[]> {
        return of(LAPTOPS);
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{
          path: 'catalog',
          component: CatalogComponent
        }]),
        MatGridListModule,
        MatProgressSpinnerModule
      ],
      declarations: [CatalogComponent],
      providers: [
        {provide: LaptopService, useValue: laptopServiceStub},
        {provide: 'BaseURL', useValue: baseURL}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('laptops should be 6', () => {
    expect(component.laptops.length).toBe(6);
  });

  it('should display pizza name in html', () => {
    fixture.detectChanges();
    let debug: DebugElement;
    let element: HTMLElement;
    debug = fixture.debugElement.query(By.css('h1'));
    element = debug.nativeElement;
    expect(element.textContent).toContain(LAPTOPS[0].name.toUpperCase());
  });

  it('selected pizza', () => {
    expect(component.selectedLaptop).toBeUndefined();
    const laptop = component.laptops[0];
    component.onSelect(laptop);
    expect(component.selectedLaptop).toBe(laptop);
  });
});
