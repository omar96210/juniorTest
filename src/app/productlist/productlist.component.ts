import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
  numbers: any[];
  getdata: any;
  cardID: any;
  indexNum: any;
  deleteID: any[] =[];
  constructor(private router:Router,private http: HttpClient,private httpClient: HttpClient,) 
    {
    this.numbers = Array(20).fill(20); // [4,4,4,4,4]
  }


    
  ngOnInit(): void {
    this.http
    .get('https://juniortest2023.000webhostapp.com/php/product.php')
    .subscribe(data => {
      this.getdata=data;
      // console.log(JSON.stringify(this.getdata)+" this the first test")
    })

    this.indexNum =0;
  }




  getCheckboxValues(id: any){
    this.cardID=id;
    if (this.deleteID.length == 0) {
      this.deleteID[this.indexNum] = this.cardID
      this.indexNum = this.indexNum + 1
      console.log("first", this.deleteID)
    }else {
      // console.log("2")
      this.deleteID.forEach((item, index, object) => {
        if (item == this.cardID) {
          // console.log("3")
          object.splice(index, 1)
          this.indexNum = this.indexNum - 1
          console.log("deleteID deleted", this.deleteID)
          this.cardID = "";

        }
      });
      if (this.cardID != "") {
        // console.log("4")
        this.deleteID[this.indexNum] = this.cardID
        this.indexNum = this.indexNum + 1
        console.log("deleteID add", this.deleteID)
      }
    
    }

  }




  massDelete(){
    this.deleteProduct(this.deleteID)
      .pipe(first())
      .subscribe(
        data => {
          
          console.log(data,'done2 ');
          this.ngOnInit();
        },
        error => {
          console.log(error,'not done2 ');

          this.ngOnInit();

        });
  }



  public deleteProduct(deleteID: any[]) {
    return this.httpClient.post<any>('https://juniortest2023.000webhostapp.com/php/deleteProduct.php', {deleteID})
      .pipe(map((user: any) => {
        return user;
      }));
  }





}
