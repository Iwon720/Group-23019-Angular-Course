import {Component, Inject, OnInit} from '@angular/core';
import {Laptop} from "../shared/laptop";
import {LaptopService} from "../services/laptop.service";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Comment} from "../shared/comment";
import {HttpService} from "../services/http.service";
import {visibility} from "../animations/app.animation";

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './laptop-info.component.html',
  styleUrls: ['./laptop-info.component.scss'],
  animations: [
    visibility()
  ],
})
export class LaptopInfoComponent implements OnInit {

  public laptop!: Laptop;
  public laptopsIds!: string[];
  public previousLaptopId!: string;
  public nextLaptopId!: string;
  public commentForm!: FormGroup;
  public comment!: Comment;
  public visibility = 'shown';

  public commentFormErrors: any = {
    'rating': '',
    'comment': '',
    'author': ''
  };

  private commentValidationMessages: any = {
    'rating': {
      'min': 'Рейтинг должен быть от 1 до 5',
    },
    'comment': {
      'required': 'Напишите отзыв',
    },
    'author': {
      'required': 'Введите свое имя',
      'minlength': 'Имя должно содержать как минимум 2 символа',
      'maxlength': 'Имя не может включать более 25 символов',
    }
  };

  constructor(@Inject('BaseURL') public BaseURL: string,
              private laptopService: LaptopService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private httpService: HttpService) {
    this.createCommentForm();
  }

  ngOnInit(): void {
    this.getLaptopDetails();
  }

  public onSubmit(): void {
    this.comment = this.commentForm.value;
    this.laptop.comments.push(this.comment);
    this.httpService.update(this.laptop, this.laptopService.laptopsLink + "/" + this.laptop.id);
    this.resetCommentForm();
  }

  public addToOrder(): void {
    this.openOrderPopup();
    this.laptopService.orderedLaptops.push(this.laptop);
  }

  public openOrderPopup(): void {
    this.laptopService.openMessagePopup("Ноутбук добавлен в корзину!");
  }

  private resetCommentForm(): void {
    this.commentForm.reset({
      rating: 0,
      author: '',
      comment: '',
      date: new Date()
    });
  }

  private getLaptopDetails(): void {
    this.laptopService.getLaptopsIds()
      .subscribe((laptopsIds) => this.laptopsIds = laptopsIds);
    this.route.params.pipe(switchMap((params: Params) => {
      this.visibility = 'hidden';
      return this.laptopService.getLaptop(params['id']);
    }))
      .subscribe(laptop => {
        this.visibility = 'shown';
        this.laptop = laptop;
        this.setPreviousAndNextLaptop(laptop.id);
      });
  }

  private setPreviousAndNextLaptop(laptopId: string): void {
    const index: number = this.laptopsIds?.indexOf(laptopId);
    this.previousLaptopId = this.laptopsIds[(this.laptopsIds.length + index - 1) % this.laptopsIds.length];
    this.nextLaptopId = this.laptopsIds[(this.laptopsIds.length + index + 1) % this.laptopsIds.length];
    this.resetCommentForm();
  }

  private createCommentForm() {
    this.commentForm = this.fb.group({
      rating: [0, Validators.min(1)],
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment: ['', Validators.required],
      date: new Date()
    });

    this.commentForm.valueChanges
      .subscribe(() =>
        this.laptopService.onFormValueChanged(this.commentForm, this.commentFormErrors, this.commentValidationMessages));
  }
}
