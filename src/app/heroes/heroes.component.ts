import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatExpansionModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  @Input() heroesName = '';
  @Input() heroesInfo = '';
  @Input() heroesUrl = '';
  @Input() heroesImage = '';
  @Input() heroesAbout = '';
}
