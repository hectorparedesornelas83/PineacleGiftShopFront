import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
	API_ENDPOINT = 'https://pineaclegiftshop.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }
  get(){
    	return this.httpClient.get(this.API_ENDPOINT + '/products');
  }
  save(product: Product){
  	const headers = new HttpHeaders({'Content-Type':'application/json'});
  	return this.httpClient.post(this.API_ENDPOINT+'/products', product,{headers: headers});
  }
  put(product){
  	const headers = new HttpHeaders({'Content-Type':'application/json'});
  	return this.httpClient.put(this.API_ENDPOINT+'/products/' + product.id, product,{headers: headers});
  }
  delete(id){
  	return this.httpClient.delete(this.API_ENDPOINT + '/products'+id);
  }
}
