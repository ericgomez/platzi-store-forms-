import { Component, OnInit } from '@angular/core';

// FormControl: Componente mas atomico la pieza fundamental de los formularios reactivos
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  nameField = new FormControl('');
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#000000');
  dateField = new FormControl('');
  monthField = new FormControl('');
  ageField = new FormControl(12);
  passwordField = new FormControl('');
  priceField = new FormControl('50');
  weekField = new FormControl('');
  timeField = new FormControl('');
  searchField = new FormControl('');
  descriptionField = new FormControl('');

  // Selects 
  categoryField = new FormControl('category-2');
  tagField = new FormControl('');

  // Checkbox
  agreeField = new FormControl(false);
  genderField = new FormControl('');
  zoneField = new FormControl('');

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

}
