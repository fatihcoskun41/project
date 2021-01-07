import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from './Item';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  isVisible = false;
  formitems:Item =new Item()

  get jsonProduct(){
      return JSON.stringify(this.formitems)
  }


  showModal(p): string {
    this.isVisible = true;
    console.log(p)
    return p

  }


  handleOk(i:Item): string {
    console.log('Button ok clicked!');
    console.log("new product " +this.jsonProduct)


    this.isVisible = false;
    return this.jsonProduct
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  posts;

  constructor(private http:HttpClient) {


   }

  ngOnInit(): void {
    this.http.get('https://api.zaguru.com/api/Classes/getClasses').subscribe(p=>{
      this.posts=p;
  })
  }


}

export class NzDemoInputTextareaWithCharacterCountComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      comment: [null, [Validators.maxLength(100)]]
    });
  }
}




