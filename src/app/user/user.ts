import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      direccion: this.fb.group({
        calle: [''],
        ciudad: [''],
      }),
      pasatiempos: this.fb.array([this.fb.control('')]),
    });
  }

  get pasatiempos(): FormArray {
    return this.registroForm.get('pasatiempos') as FormArray;
  }

  agregarPasatiempo(): void {
    this.pasatiempos.push(this.fb.control(''));
  }

  onSubmit(): void {
    console.log(this.registroForm.value);
  }

  cargarDireccionPrueba(): void {
    this.registroForm.patchValue({
      direccion: {
        calle: 'Av. Siempre Viva 123',
        ciudad: 'Springfield',
      },
    });
  }
}
