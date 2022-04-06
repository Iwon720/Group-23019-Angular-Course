import {Injectable} from '@angular/core';
import {Laptop} from "../shared/laptop";
import {delay, map, Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../shared/baseurl";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";
import {User} from "../shared/user";

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  public laptopsLink: string = "laptops";
  public feedbackLink: string = "feedback";
  public usersLink: string = "users";
  public ordersLink: string = "orders";

  public orderedLaptops: Laptop[] = [];
  public user: User = new User();
  public isUserSubmitted: boolean = false;

  constructor(private http: HttpClient,
              private dialog: MatDialog) {
  }

  public getLaptops(): Observable<Laptop[]> {
    return this.http.get<Laptop[]>(baseURL + this.laptopsLink);
  }

  public getLaptopsWithDelay(): Observable<Laptop[]> {
    return this.http.get<Laptop[]>(baseURL + this.laptopsLink)
      .pipe(
        delay(2000)
      );
  }

  public getFeaturedLaptops(): Observable<Laptop[]> {
    return this.http.get<Laptop[]>(baseURL + this.laptopsLink + "?featured=true");
  }

  public getLaptop(id: string): Observable<Laptop> {
    return this.http.get<Laptop>(baseURL + this.laptopsLink + "/" + id).pipe(
      delay(500)
    );
  }

  public getLaptopsIds(): Observable<string[]> {
    return this.getLaptops().pipe(map(laptops => laptops.map(laptop => laptop.id)));
  }

  public getUser(): Observable<User> {
    return this.http.get<User>(baseURL + this.usersLink + "?username=" + this.user.username + "&password=" + this.user.password);
  }

  public checkUsername(): Observable<User> {
    return this.http.get<User>(baseURL + this.usersLink + "?username=" + this.user.username);
  }

  public onFormValueChanged(formGroup: FormGroup, formErrors: any, validationMessages: any) {
    if (!formGroup) {
      return;
    }
    for (const field in formErrors) {
      if (formErrors.hasOwnProperty(field)) {
        formErrors[field] = '';
        const control = formGroup.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  public openMessagePopup(message: string): void {
    this.dialog.open(PopupComponent, {
        width: '500px',
        height: '110px',
        data: message
      }
    );
  }
}
