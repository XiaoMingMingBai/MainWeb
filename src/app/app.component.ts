import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { url } from 'inspector';
import { abort } from 'process';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cardInfo = [
    {
      name: 'Owncloud',
      info: 'Owncloud is a suite of client-server software for creating file hosting services and using them. ',
      url: 'http://127.0.0.1:1212/',
      image: '../assets/oc-logo-circle-kiteworks.svg',
      about:
        'Owncloud is a suite of client-server software for creating file hosting services and using them. Owncloud is functionally very similar to the widely used Dropbox, with the primary functional difference being that Owncloud is free and open-source, and thereby allowing anyone to install and operate it without charge on a private server.',
    },
    {
      name: 'MyWeb',
      info: 'This is a test website for the purpose of learning Angular.',
      url: 'http://127.0.0.1:1213/',
      about: 'This is test.',
    },
  ];
}
