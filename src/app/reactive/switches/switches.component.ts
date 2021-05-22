import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private fb: FormBuilder) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.miFormulario.reset({ ...this.persona, condiciones: true });

    this.miFormulario.valueChanges.subscribe(({condiciones, ...rest}) => {
      // delete form.condiciones;
      this.persona = rest;
    });
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;

    console.log(formValue);
  }
}
