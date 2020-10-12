import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	product: Product = {name:null, description:null, price:null};
  
  id: any;
  editing: boolean = false;
  products: Product[];


  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editing = true;
      this.productsService.get().subscribe((data:Product[])=>{
        this.products = data;
        this.product= this.products.find((m)=>{return m.id==this.id});
        console.log(this.product);
      }),(error)=>{
        console.log(error);
      }
    }
    else
    {
      this.editing = false;
    }
  }

  ngOnInit(): void {
  }

  saveProduct(){
    if(this.editing){
          this.productsService.put(this.product).subscribe((data)=>{
          alert('Producto actualizada');
          console.log(data);
          },(error)=>{
            console.log(error);
            alert('Ocurrio un error');
          });
    }
    else
    {
          this.productsService.save(this.product).subscribe((data)=>{
          alert('Producto guardado');
          console.log(data);
          },(error)=>{
            console.log(error);
            alert('Ocurrio un error');
          });
    }
  }

}
