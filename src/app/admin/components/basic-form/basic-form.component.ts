import { Component, OnInit } from '@angular/core';

// FormControl: Componente mas atomico la pieza fundamental de los formularios reactivos
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    // Crear el formulario
    this.buildForm();
   }

  ngOnInit(): void {
    // El metodo valueChanges se suscribe al valor que vaya cambiando y se vuelve un listener
    // en tiempo real pero en TypeScript
    // this.nameField.valueChanges
    //  .subscribe(value => {
    //    console.log(value);
    //  });

    // Escuchando los cambios de forma reactiva
    // this.form.valueChanges
    //  .subscribe(value => {
    //    console.log(value);
    //  });
  }

  //Obtener el valor del input en el browser
  getNameValue() {
    console.log(this.nameField.value);
  }

  save(event) {
    // Accion despues de precionar el boton
    if (this.form.valid){
      console.log(this.form.value);
    } else {
      // Marcamos todos los campos como touched
      this.form.markAllAsTouched();
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      fullName: this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z ]+$/)]],
        last: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z ]+$/)]]
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: ['#000000'],
      date: [''],
      month: [''],
      age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
      password: [''],
      price: ['50'],
      week: [''],
      time: [''],
      search: [''],
      description: [''],
    
      // Selects 
      category: ['category-2'],
      tag: [''],
    
      // Checkbox
      agree: [false, [Validators.requiredTrue]],
      gender: [''],
      zone: [''],
    })
  }

  get nameField() {
    return this.form.get('fullName.name');
  }

  get lastField() {
    return this.form.get('fullName.last');
  }

  // Funciones para validaciones
  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get monthField() {
    return this.form.get('month');
  }

  get ageField() {
    return this.form.get('age');
  }

  get passwordField() {
    return this.form.get('password');
  }

  get priceField() {
    return this.form.get('price');
  }

  get weekField() {
    return this.form.get('week');
  }

  get timeField() {
    return this.form.get('time');
  }

  get searchField() {
    return this.form.get('search');
  }

  get descriptionField() {
    return this.form.get('description');
  }

  // Selects 
  get categoryField() {
    return this.form.get('category');
  }

  get tagField() {
    return this.form.get('tag');
  }

  // Checkbox
  get agreeField() {
    return this.form.get('agree');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get zoneField() {
    return this.form.get('zone');
  }

}
