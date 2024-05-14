import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainContainerComponent } from '../layout';
import { SignInCardComponent } from './sign-in-card/sign-in-card.component';
import { LogInCardComponent } from './log-in-card/log-in-card.component';
import { User } from '../../models/user';
import { LogIn } from '../../models/login';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [MainContainerComponent, SignInCardComponent, LogInCardComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent implements OnInit {
  isLogged = false;
  userLogin: LogIn | undefined;
  callSignInCard: string = '';

  @Output() userLogged = new EventEmitter<LogIn>();

  ngOnInit(): void {}

  // Creamos una función para recibir el evento del componente hijo
  // El evento del componente hijo se tiene que manejar a nivel del html, en el selector del componente hijo con unos parentesis
  // Despues igualamos ese evento a nuestra función para guardar el valor en nuestro componente padre
  getCallSignInCard(callSignInCardValue: string) {
    this.callSignInCard = callSignInCardValue;
  }

  getUserLogged(userLogin: LogIn) {
    this.isLogged = true;
    this.userLogin = userLogin;
    console.log(this.userLogged);
  }
}
