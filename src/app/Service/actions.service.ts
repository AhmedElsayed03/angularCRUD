import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private myClient:HttpClient) { }
  private Base_URL="https://jsonplaceholder.typicode.com/users"
  private Base_URL2="https://jsonplaceholder.typicode.com/albums"
  private Base_URL3="https://jsonplaceholder.typicode.com/photos"
  getAllUsers(){
    return this.myClient.get(this.Base_URL);
  }

  getUserById(id:any){
    return this.myClient.get(this.Base_URL+'/'+id);
  }
 
  getUserAlbums(id:any){ 
    return this.myClient.get(this.Base_URL2+"?userId="+id);
  }

  getUserPhotos(id:any){
    return this.myClient.get(this.Base_URL3+"?albumId="+id);
  }

  addUser(data:any){
    return data;
  }

  updateUser(){
    
  }

  DeleteUser(){
    
  }
}
