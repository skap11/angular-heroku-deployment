import { Component } from '@angular/core';
import {HeroService} from '../services/backend.service'
import {Heroes} from '../shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  heroMessage = "";
  constructor(private readonly heroService: HeroService) {
    this.heroService.getMessage().subscribe((message: Heroes) => {
      this.heroMessage = message.result;
    });
  }

}
