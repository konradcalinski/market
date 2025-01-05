import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AbotusComponent} from './abotus/abotus.component';
import {LandingComponent} from './landing/landing.component';
import {PracownicyComponent} from './pracownicy/pracownicy.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AbotusComponent, LandingComponent, PracownicyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled3';
}
