import { Component, OnInit } from '@angular/core';

// FormControl: Componente mas atomico la pieza fundamental de los formularios reactivos
import { FormControl, Validators, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]), // implementando 2 validaciones
    email: new FormControl(''),
    phone: new FormControl(''),
    color: new FormControl('#000000'),
    date: new FormControl(''),
    month: new FormControl(''),
    age: new FormControl(12),
    password: new FormControl(''),
    price: new FormControl('50'),
    week: new FormControl(''),
    time: new FormControl(''),
    search: new FormControl(''),
    description: new FormControl(''),
  
    // Selects 
    category: new FormControl('category-2'),
    tag: new FormControl(''),
  
    // Checkbox
    agree: new FormControl(false),
    gender: new FormControl(''),
    zone: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
    // El metodo valueChanges se suscribe al valor que vaya cambiando y se vuelve un listener
    // en tiempo real pero en TypeScript
    this.nameField.valueChanges
      .subscribe(value => {
        console.log(value);
      })
  }

  //Obtener el valor del input en el browser
  getNameValue() {
    console.log(this.nameField.value);
  }

  save(event) {
    console.log(this.form.value);
  }

  get nameField() {
    return this.form.get('name');
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
