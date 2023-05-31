import { Component } from '@angular/core';
import { ActionsService } from '../Service/actions.service';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users:any;
  constructor(myService:ActionsService){
    myService.getAllUsers().subscribe(
      {
        next:(data)=>{
          this.users=data;
        },
        error:(err)=>{}
      }
    )
  }
}
