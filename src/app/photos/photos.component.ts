import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../Service/actions.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  ID= 0;
  user:any;
  userData:any;
  //Defining Var type of --ActivatedRoute-- to access
  constructor(myRoute:ActivatedRoute,public myService:ActionsService){
    
    //Getting Current ID in URL (User ID)
    this.ID=myRoute.snapshot.params["id"];
    
    this.myService.getUserById(this.ID).subscribe(
      {
        next:(data)=>{
          this.userData=data;
        },
        error:(err)=>{}
      }
    )
  }
  //OnInit executes after Ctor
  ngOnInit(): void {
    //Getting Data of Certain ID
    this.myService.getUserPhotos(this.ID).subscribe(
      {
        next:(data)=>{
          this.user=data;
        },
        error:(err)=>{}
      }
    )
  }
}
