import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StepperComponent),
      multi: true
    }
  ]
})
export class StepperComponent implements OnInit, ControlValueAccessor {

  currentValue = 0;
  //Funciones Vacias
  onChange = (_: any) => { };
  onTouch = () => { };
  isDisabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.currentValue = this.currentValue + 1;
    this.onTouch(); // El elemento a sido tocado
    this.onChange(this.currentValue);// El elemento tiene cambios
  }

  sub() {
    this.currentValue = this.currentValue - 1;
    this.onTouch();
    this.onChange(this.currentValue);
  }

  // Metodos por defecto de ControlValueAccessor

  // Setear un valor por defecto
  writeValue(value: number): void {
    if (value) {
      this.currentValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
