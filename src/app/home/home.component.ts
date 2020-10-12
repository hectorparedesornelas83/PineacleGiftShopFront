import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	products: Product[];

  	constructor(private productsService: ProductsService) { 
    	this.getMovies();
      /*	httpClient.get(this.API_ENDPOINT + '/products').subscribe((data: Product[]) => {
    		this.products = data;
    	});*/
    }

  getMovies()
  {
    this.productsService.get().subscribe((data:Product[])=>{
      this.products = data;
    },(error)=>{console.log(error);
      alert('Ocurrio un error');
    });
  }

  ngOnInit(): void {
  }

  delete(id){
    if(confirm('Seguro que deseas eliminar este producto?'))
    {
      this.productsService.delete(id).subscribe((data:Product[])=>{
       alert('Eliminado con exito');
        this.getMovies();
      },(error)=>{
        console.log(error);
      });
    }
  }
}
