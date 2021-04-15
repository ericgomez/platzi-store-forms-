import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { CategoriesService } from './../../../../core/services/categories.service';
import { AngularFireStorage } from '@angular/fire/storage';

import { MyValidators } from './../../../../utils/validators';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  form: FormGroup;
  urlImage$: Observable<string>;
  categoryId: string;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router,
    private storage: AngularFireStorage,
    private route: ActivatedRoute,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.categoryId = params.id;
      if (this.categoryId) {
        this.getCategory();
      }
    });
  }

  private buildForm() {
    // Validaciones el el formulario
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)], MyValidators.validateCategory(this.categoriesService)],
      image: ['', Validators.required]
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  get imageField() {
    return this.form.get('image');
  }

  save() {
    if (this.form.valid) {
      if (this.categoryId) {
        this.updateCategory();
      } else {
        this.createCategory();
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  // Metodo para crear una categoria si todo esta correcto
  private createCategory() {
    const data = this.form.value;
    this.categoriesService.createCategory(data)
    .subscribe(rta => {
      // Redireccionamos a la ruta de Categorias
      this.router.navigate(['/admin/categories']);
    });
  }

  private updateCategory() {
    const data = this.form.value;
    this.categoriesService.updateCategory(this.categoryId, data)
    .subscribe(rta => {
      this.router.navigate(['/admin/categories']);
    });
  }

  private getCategory() {
    this.categoriesService.getCategory(this.categoryId)
    .subscribe(data => {
      // LLenamos el formulario con la data
      this.form.patchValue(data);
    });
  }

  uploadFile(event) {
    const image = event.target.files[0];
    const name = 'category.png';
    const ref = this.storage.ref(name);
    const task = this.storage.upload(name, image);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.urlImage$ = ref.getDownloadURL();
          this.urlImage$.subscribe(url => {
            console.log(url);

            this.imageField.setValue(url);
          })
        })
      )
      .subscribe();
  }

}
