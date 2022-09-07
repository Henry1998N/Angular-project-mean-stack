import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { users } from '../users.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { man, ManService } from '../man.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[]
})
export class AddComponent implements OnInit {
  
  constructor(private HelpService:ManService) { }
  user:man=new man("","","","","");

  ngOnInit(): void {
    this.createLoginForm();

  }
  
  onsubmit(loginForm){
    alert(loginForm.value.name);
    this.HelpService.postusr(loginForm.value).subscribe((res =>{
      alert("Added!");
    }));
  }
  loginForm:FormGroup;
  createLoginForm(){
    this.loginForm=new FormGroup({
      password :new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(19)]),
      email :new FormControl('',[Validators.required,Validators.email]),
      name :new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(9)]),
      img :new FormControl('',[Validators.required]),
      id :new FormControl('',[Validators.required,Validators.minLength(9),Validators.maxLength(9)]),

      
    });

}
}