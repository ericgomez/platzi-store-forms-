import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from './../models/category.model';

import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  // Obtenemos todas las categorias desde la API
  getAllCategories() {
    return this.http.get<Category[]>(`${environment.url_api}/categories/`);
  }

  getCategory(id: string) {
    return this.http.get<Category>(`${environment.url_api}/categories/${id}`);
  }


  // Creamos una categorias desde la API
  createCategory(data: Partial<Category>) {
    return this.http.post<Category>(`${environment.url_api}/categories/`, data);
  }

  // Actualizamos una categoria desde la API
  updateCategory(id: string, data: Partial<Category>) {
    return this.http.put<Category>(`${environment.url_api}/categories/${id}`, data);
  }

  //Checar si el nombre esta disponible para la categoria
  checkCategory(name: string) {
    return this.http.post(`${environment.url_api}/categories/availability`, {name});
  }
}
