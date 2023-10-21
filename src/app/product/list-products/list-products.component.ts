import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  constructor(private ps:ProductsService){
    this.ps.getAllProducts().subscribe((obj)=>{
      obj.forEach(doc=>{
        console.log(doc);
            })
    })
  }
}
