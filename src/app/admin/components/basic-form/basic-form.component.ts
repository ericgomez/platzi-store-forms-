import { Component, OnInit } from '@angular/core';

// FormControl: Componente mas atomico la pieza fundamental de los formularios reactivos
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  nameField = new FormControl('Soy un control');

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
