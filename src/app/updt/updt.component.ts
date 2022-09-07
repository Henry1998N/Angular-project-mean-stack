import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { man, ManService } from '../man.service';

@Component({
  selector: 'app-updt',
  templateUrl: './updt.component.html',
  styleUrls: ['./updt.component.css'],
  providers: []
})
export class UpdtComponent implements OnInit {
  user: man;
  stam: String;
  constructor(private man: ManService) { }
  ngOnInit(): void {
    this.createLoginForm();
    this.user = this.man.man;
    this.stam = this.man.current;

  }
  onsubmit(loginForm) {
    alert(loginForm.value.name);

    this.man.man.name = loginForm.value.name,
      this.man.man.email = loginForm.value.email,
      this.man.man.id =

      loginForm.value.id,
      this.man.man.password = loginForm.value.password,
      this.man.man.img = loginForm.value.img


    this.man.update
      (this.man.man).subscribe((res => {
        alert("thank");
      }));
  }
  loginForm: FormGroup;
  createLoginForm() {
    this.loginForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(19)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(9)]),
      img: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),


    });

  }
  on() {

  }
}
