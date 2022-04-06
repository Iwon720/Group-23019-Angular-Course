import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HttpService} from "../services/http.service";
import {LaptopService} from "../services/laptop.service";
import {SignUpComponent} from "../sign-up/sign-up.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public laptopService: LaptopService,
              private dialogRef: MatDialogRef<LoginComponent>,
              private httpService: HttpService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.laptopService.getUser().subscribe(user => {
      const data: any = user;
      if (data.length != 0) {
        this.laptopService.user = data[0];
        this.laptopService.isUserSubmitted = true;
        this.dialogRef.close();
      } else {
        this.laptopService.openMessagePopup("Неверная комбинация логин/пароль");
      }
    });
  }

  public openSignUpForm(): void {
    this.dialogRef.close();
    this.dialog.open(SignUpComponent, {
        width: '700px',
        height: '500px'
      }
    );
  }
}
