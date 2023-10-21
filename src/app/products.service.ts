import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore,collection,query, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})



export class ProductsService {
  products:Product[]=[];
  constructor(private db:Firestore) { 
    this.db=inject(Firestore);
    
  }
getAllProducts():Observable<Product[]>{
 const productRef=collection(this.db,'products');
 return  collectionData(query(productRef),{idField:'doc_id'}) as Observable<Product[]>; 
//  console.log(result);
//  return result;
  
}
}
