import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private api:ApiService) { }
  image:any = "";
  ngOnInit(): void {
  }
  name="";
  selectImage(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.image = file;
    }
  }
  addCategory(){
    const formData = new FormData();
    formData.append("image",this.image);
    formData.append("name",this.name);
    this.api.addCategory(formData).subscribe(data=>{
      // console.log(data);
      if(data._id){
        alert("Category Added");
      }
      else
        alert("Some error occured");
    })
  }

}
