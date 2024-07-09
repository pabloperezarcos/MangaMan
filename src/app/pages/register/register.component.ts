import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register-service/register.service';
import { UserModel } from '../../models/userModel';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  registeredUsers: UserModel[] = [];

  constructor(private fb: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(): void {

    this.registerService.getRegisteredUsers().subscribe(data => {
      this.registeredUsers = data;
      console.log(this.registeredUsers);
    })


    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]],
      password1: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]],
    });
  }

  registerUser(): void {
    const newUser: UserModel = {
      id: this.registeredUsers.length > 0 ? Math.max(...this.registeredUsers.map((p: UserModel) => p.id)) + 1 : 1,
      nombre: this.registerForm.get('name')!.value,
      correo: this.registerForm.get('email')!.value,
      contrasena: this.registerForm.get('password')!.value
    };

    this.registeredUsers.push(newUser);

    this.registerService.updateRegisteredUsers(this.registeredUsers);
  }


  submitForm() {
    if (this.registerForm.valid) {
      // continuar con formulario correcto.
      this.registerUser();
      // alert("REGISTRO OK" + this.registerForm.get('name')!.value);
    } else {
      alert("Algun error que tambien hay que trabajar con los servicios.");
    }
  }
}
