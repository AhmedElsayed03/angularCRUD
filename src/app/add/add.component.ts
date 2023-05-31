import { Component } from '@angular/core';
import { ActionsService } from '../Service/actions.service';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  addFrom: FormGroup;

  //Inserted Data sotred here in "data".
  data:any;
  constructor(private fb: FormBuilder,public serve: ActionsService ){

    this.addFrom = this.fb.group({
      fullname:"",
      email:"",
      phone:"",
      // address: { city: "", street: "", suite: "" }
      city:"",
      street:"",
      suite:"",
    });

    
  }
  //Getting list contains addForm Data
  onFormSubmit(){
    if(this.addFrom.valid)
      this.data=this.addFrom.value;

      //Here I should pass inserted data in this function to send it to user component
      //Here I got this Error IDK How (Property 'addUser' does not exist on type 'ActionsService')
      //this.serve.addUser(this.data);
  }
}
