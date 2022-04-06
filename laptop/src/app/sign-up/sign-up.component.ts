import {Component, OnInit} from '@angular/core';
import {LaptopService} from "../services/laptop.service";
import {MatDialogRef} from "@angular/material/dialog";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public laptopService: LaptopService,
              private dialogRef: MatDialogRef<SignUpComponent>,
              private http: HttpService) {
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.laptopService.checkUsername().subscribe(user => {
      const data: any = user;
      if (data.length != 0) {
        this.laptopService.openMessagePopup("Логин занят!");
      } else {
        if (this.laptopService.user.remember) {
          this.http.save(this.laptopService.user, this.laptopService.usersLink);
        }
        this.dialogRef.close();
        this.laptopService.isUserSubmitted = true;
      }
    });
  }
}
