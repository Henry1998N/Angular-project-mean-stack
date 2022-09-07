import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { man, ManService } from '../man.service';

@Component({
  selector: 'app-manupd',
  templateUrl: './manupd.component.html',
  styleUrls: ['./manupd.component.css']
})
export class ManupdComponent implements OnInit {

  constructor(private HelpService:ManService,private router: Router) { }
  managers:man[];

  
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.HelpService.getman().subscribe((res)=>{
      this.managers=res as man[];
    });


}
onDelete(id:String){
if(confirm('Are you sure you want to delete this manager ?')==true){
  this.HelpService.delete(id).subscribe((res)=>{
    this.refresh();

  });
}
}
onEdit(id:String){
  this.HelpService.current=id;
  this.router.navigateByUrl('/updt');


}
}
