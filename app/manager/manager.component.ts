import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { man, ManService } from '../man.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private ManService :ManService,private router: Router) { }
  managers:man[];
  ngOnInit(): void {
    this.createLoginForm();
    this.refresh();
  }
  loginForm:FormGroup;
  createLoginForm(){
    this.loginForm=new FormGroup({
      password :new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(19)]),
      email :new FormControl('',[Validators.required,Validators.email]),
      
    });

  }
  
  refresh(){
    this.ManService.getman().subscribe((res)=>{
      this.managers=res as man[];
    });
  }
  onSubmit(loginForm){
  
    for(let man of this.managers){
      if((man.email == loginForm.value.email) && (man.password == loginForm.value.password)){
        console.log('valid manager');
        alert('valid user')
        this.router.navigateByUrl('/mannav');
       return;
       }
      }
       
        
        alert('invalid user')
        console.log('inavlid user')
       
       
   
  }


}
