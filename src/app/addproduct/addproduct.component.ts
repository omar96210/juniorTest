import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
declare var $: any;

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {
  productForm: FormGroup;
  view1 = false;
  view2 = false;
  view3 = false;
  skucolor = 'black';
  namecolor = 'black';
  pricecolor = 'black';
  typecolor = 'black';
  sizecolor = 'black';
  weightcolor = 'black';
  heightcolor = 'black';
  widthcolor = 'black';
  lengthcolor = 'black';
  
    
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpClient: HttpClient,) {
    this.productForm = this.fb.group({
      sku: new FormControl(''),
      name: new FormControl(''),
      price: new FormControl(''),
      type: new FormControl(''),
      size: new FormControl(''),
      weight: new FormControl(''),
      height: new FormControl(''),
      width: new FormControl(''),
      length: new FormControl(''),
    });
  }


  show(viewid: string) {
    if (viewid == '1') {
      this.view1 = true;
      this.view2 = false;
      this.view3 = false;
    } else if (viewid == '2') {
      this.view1 = false;
      this.view2 = true;
      this.view3 = false;
    } else if (viewid == '3') {
      this.view1 = false;
      this.view2 = false;
      this.view3 = true;
    }
  };
  productdata(productForm: any) {

    console.log(productForm.value)
    if (productForm.value.sku != "" && productForm.value.name != 0 && productForm.value.price != 0) {
      if (productForm.value.type != "") {
        if (productForm.value.type == '1') {
          if (productForm.value.size != 0) {
            this.proudctSend(productForm);
          } else {
            this.pricecolor = 'black'
            this.namecolor = 'black'
            this.skucolor = 'black'
            if (productForm.value.size == 0) {
              this.sizecolor = 'red'
            } else {
              this.sizecolor = 'black'
            }
            alert("Please, submit Size");
          }
        }
        if (productForm.value.type == '2') {
          if (productForm.value.weight != 0) {
            this.proudctSend(productForm);

          } else {
            this.pricecolor = 'black'
            this.namecolor = 'black'
            this.skucolor = 'black'
            if (productForm.value.weight == 0) {
              this.weightcolor = 'red'
            } else {
              this.weightcolor = 'black'
            }
            alert("Please, submit weight");

          }
        }
        if (productForm.value.type == '3') {
          if (productForm.value.height != "" && productForm.value.width != "" && productForm.value.length != "") {
            this.proudctSend(productForm);
          } else {
            this.typecolor = 'black'
            this.pricecolor = 'black'
            this.namecolor = 'black'
            this.skucolor = 'black'
            if (productForm.value.height == 0) {
              this.heightcolor = 'red'
            } else {
              this.heightcolor = 'black'
            }
            if (productForm.value.width == 0) {
              this.widthcolor = 'red'
            } else {
              this.widthcolor = 'black'
            }
            if (productForm.value.length == 0) {
              this.lengthcolor = 'red'
            } else {
              this.lengthcolor = 'black'
            }
            if (productForm.value.sku == "") {
              this.skucolor = 'red'
            } else {
              this.skucolor = 'black'
            }
            alert("Please, submit dimensions");
          }
        }
      } else {
        this.pricecolor = 'black'
        this.namecolor = 'black'
        this.skucolor = 'black'
        if (productForm.value.type == 0) {
          this.typecolor = 'red'
        }
        alert("Please, choese type for the product");
      }
    } else {
      if (productForm.value.sku == "") {
        this.skucolor = 'red'
      } else {
        this.skucolor = 'black'
      }
      if (productForm.value.name == "") {
        this.namecolor = 'red'
      } else {
        this.namecolor = 'black'
      }
      if (productForm.value.price == 0) {
        this.pricecolor = 'red'
      } else {
        this.pricecolor = 'black'
      }
      alert("Please, submit required data ");
    }



  }



  proudctSend(productForm: any) {

    this.productSave(productForm.value.sku, productForm.value.name, productForm.value.price,
      productForm.value.type, productForm.value.size,productForm.value.weight,
      productForm.value.height,productForm.value.width,productForm.value.length)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data,'done2 ');
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error,'not done2 ');
          this.router.navigate(['/home']);

          
        });


  
  }

  public productSave(productsku: any, productname: any, productprice: any, 
    producttype: any,productsize: any, productweight: any,
    productheight: any, productwidth: any, productlength: any) {
    return this.httpClient.post<any>('https://juniortest2023.000webhostapp.com/php/setproduct.php', { productsku, productname, productprice, producttype, productsize, productweight, productheight, productwidth, productlength })
      .pipe(map((user: any) => {
        return user;
      }));
  }



}


