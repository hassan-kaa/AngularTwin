import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  list : Product[];
  constructor() {
    
   }

  ngOnInit(): void {
  
    this.list=[{color:"#ffffff",id:1,price:52,nbrLikes:30,description:"Best Quaiity in Town",category:"Men",quantity:22,picture:"https://images.unsplash.com/photo-1618677603544-51162346e165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",title:"White oversized T"},{id:1,price:52,nbrLikes:30,description:"Nice T-shirt",color:"#23224",category:"Men",quantity:22,picture:"https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",title:"Turquoise oversized T"},
    {id:1,price:52,color:"#000",nbrLikes:30,description:"I really like this one",category:"Men",quantity:22,picture:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",title:"Black oversized T"}]
  }
  incrementLike(product : Product):void{
    let i = this.list.indexOf(product)
    if(i!=-1){
      this.list[i].nbrLikes++;
    }

  }
  buyProduct(product:Product):void{
    let i = this.list.indexOf(product)
    if(this.list[i].quantity===0){
      console.log("no more items ")
      return ;
    }
    if(i!=-1){
      this.list[i].quantity--;
    }
  }

}
