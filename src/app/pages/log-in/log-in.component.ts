import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserModel } from '../../models/userModel';
import { LoginService } from '../../services/login-service/login.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  usuarios: UserModel[] = [];

  formularioLogIn!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  // Metodo onInit se ejecuta al cargar componente, justo despues del constructor de la clase
  ngOnInit(): void {
    this.loginService.getUsers().subscribe(data => {
      this.usuarios = data;
      console.log(this.usuarios)

    });

    this.formularioLogIn = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }


  // Metodo para validar estado de formulario al intentar iniciar sesión
  submitForm() {
    if (this.formularioLogIn.valid) {

      if (this.validateCredentials()) {

        alert('Bienvenido: ' + this.formularioLogIn.get('email')!.value)
      } else {

        alert('Error al iniciar sesión')
      }

    } else {
      alert('Error al iniciar sesión')
    }
  }

  // Metodo para validar credenciales
  validateCredentials(): boolean {

    for (let element of this.usuarios) {
      if (this.formularioLogIn.get('email')!.value == element.correo && this.formularioLogIn.get('password')!.value == element.contrasena) {
        return true;
      }
    }
    return false;
  }

}
