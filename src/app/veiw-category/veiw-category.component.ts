import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-veiw-category',
  templateUrl: './veiw-category.component.html',
  styleUrls: ['./veiw-category.component.css']
})
export class VeiwCategoryComponent implements OnInit {
  categoryList:any="";
  constructor(private api:ApiService) {}

   delete(cid:string,image:string){
     if(confirm("Are you Sure?")){
      this.api.deleteCategory(cid,image).subscribe(data=>{
        if(data.acknowledged){
          this.ngOnInit();
        }
        else  
          alert("Something went wrong");
      })
     }
   }
   
  ngOnInit(): void {
    this.api.viewCategory().subscribe(data=>{
      this.categoryList = data;
      console.log(data);
    });
  }
}
